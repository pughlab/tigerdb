import { GraphQLScalarType, Kind } from 'graphql'
import { ApolloError } from "apollo-server";

function sanitizeString(str: string) {
  return str.replace(/[^a-zA-Z0-9\.\-_\*]/g, "").trim();
}

function parseValue(value) {
  let result = parseInt(value);
  if(!isNaN(result)) {
    return result;
  }
  result = parseFloat(value);
  if(!isNaN(result)) {
    return result;
  }
  return `"${sanitizeString(value)}"`;
}

function buildFilters(filters) {
  let result = '';
  if (filters) {
    const filterArray: string[] = [];
    Object.keys(filters).forEach((key) => {
      let filterStr = ''
      filterStr += `v.${key} IN [${filters[key].map((value: string) => parseValue(value))}]`;
      filterArray.push(filterStr);
    })
    if (filterArray.length > 0) {
      result = 'AND ' + filterArray.join(' AND ');
    }
  }
  return result;
}

function fuzzinessScore(text: string, pattern: string): number {
  const nonMatchingPositions = [];
  for (let i = 0; i < pattern.length; i++) {
    if (text[i] !== pattern[i]) {
      nonMatchingPositions.push(i);
    }
  }

  // calculate percentage of matches compared to the searched pattern
  const score = (1 - nonMatchingPositions.length / pattern.length) * 100;
  return Number.parseFloat(score.toFixed(2));
}

function bitapSearch(
  text: string,
  pattern: string,
  max_differences: number = 2
): boolean {
  if (text.length < pattern.length) {
    return false;
  }

  let differences = 0;
  for (let idx = 0; idx < pattern.length; idx++) {
    if (text.charAt(idx).toLowerCase() !== pattern.charAt(idx).toLowerCase()) {
      differences++;
    }
    if (differences > max_differences) {
      return false;
    }
  }
  return true;
}

function buildCondition(projectIDs, text, tags, categories) {
  const hasConditions = projectIDs?.length > 0 || text || tags?.length > 0 || categories?.length > 0
  if (!hasConditions) {
    return ''
  }
  const conditions: string[] = []
  if (projectIDs?.length > 0) {
    conditions.push(`p.projectID IN [${projectIDs.map((projectID) => '"' + projectID + '"')}]`)
  }
  if (text?.length > 0) {
    conditions.push(`p.name =~ "(?i).*${text}.*" OR p.description =~ "(?i).*${text}.*"`)
  }
  if (tags?.length > 0) {
    conditions.push(`t.name IN [${tags.map((tag) => '"' + tag + '"').join(',')}]`)
  }
  if (categories?.length > 0) {
    conditions.push(`t.category IN [${categories.map((category) => '"' + category + '"').join(',')}]`)
  }
  return `WHERE ${conditions.join(' AND ')}`;
}

export const resolvers = {
  Decimal: new GraphQLScalarType({
    name: 'Decimal',
    description:'scalar for decimal numbers',
    serialize(value) {
      return value;
    },
    parseValue(value) {
      return value;
    },
    parseLiteral(ast)  {
      if (ast.kind === Kind.FLOAT) {
        return parseFloat(ast.value);
      }
      return null;
    }
  }),
  Query: {
    findCDR3s: async (_parent, args, { driver }) => {
      const { input, page, pageSize } = args;
      // This code calls the search service with caching (currently in construction).
      // It also requires updating the nodejs version in the api container (tested with v22).
      //
      // const { cdr3b, filters, differenceFactor, tags, categories } = input;
      // let results: any[] = [];
      // await fetch(
      //   `http://${process.env.CDR3B_HOST ?? "cdr3b-search"}:${
      //     process.env.CDR3B_PORT ?? 9010
      //   }`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       input: {
      //         cdr3b,
      //         categories,
      //         tags,
      //         filters,
      //         differenceFactor,
      //       },
      //       page,
      //       pageSize,
      //     }),
      //   }
      // )
      //   .then((res) => res.json())
      //   .then((data) => (results = data))
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // return results;
      const { cdr3b, projectIDs, text, filters, limit, differenceFactor, tags, categories } = input;
      const session = driver.session();
      const condition = buildCondition(projectIDs, text, tags, categories)

      try {
        const builtFilters = buildFilters(filters);
        let query = `MATCH (p:Project)-[]->(d:Dataset)-[]->(t:Tag)
          ${condition}
          WITH p, d, collect(t.name) AS tagNames
          WITH p, d, tagNames, {
              projectID: p.projectID,
              projectName: p.name,
              projectDescription: p.description,
              projectCreationDate: p.createdOn,
              projectIsPublic: p.isPublic,
              projectIsReference: p.isReference,
              datasetID: d.datasetID,
              datasetName: d.name
          } AS data1
          WITH data1
          MATCH (p:Project)-[]->(k:KeycloakUser)
          WHERE p.projectID = data1.projectID
          WITH data1, {
              creatorName: k.name,
              creatorEmail: k.email
          } as data2
          WITH data1, data2
          MATCH (p:Project)-[]->(d:Dataset)-[]->(t:Tag)
          WHERE d.datasetID in data1.datasetID
          WITH data1, data2, collect({
              tagID: t.tagID,
              category: t.category,
              name: t.name
          }) AS tags
          MATCH (d:Dataset)-[]->(c:CuratedAnnotation)-[]->(v:AnnotationVariable)
          WHERE d.datasetID in data1.datasetID
          ${builtFilters}
          RETURN {
            projectID: data1.projectID,
            projectName: data1.projectName,
            projectDescription: data1.projectDescription,
            projectIsPublic: data1.projectIsPublic,
            projectIsReference: data1.projectIsReference,
            projectCreationDate: data1.projectCreationDate,
            creatorName: data2.creatorName,
            creatorEmail: data2.creatorEmail,
            datasetID: d.datasetID,
            datasetName: d.name,
            variableID: v.annotationVariableID,
            reference: v.reference,
            cdr3b: v.cdr3b,
            trbv: v.trbv,
            trbj: v.trbj,
            mhc: v.mhc,
            mhcClass: v.mhcClass,
            epitopeGene: v.epitopeGene,
            epitopeAAseq: v.epitopeAAseq,
            epitopeSpecies: v.epitopeSpecies,
            tags: tags
          } AS data
          UNION
          MATCH (p:Project)-[]->(d:Dataset)-[]->(t:Tag)
          ${condition}
          WITH p, d, collect(t.name) AS tagNames
          WITH p, d, tagNames, {
              projectID: p.projectID,
              projectName: p.name,
              projectDescription: p.description,
              projectCreationDate: p.createdOn,
              projectIsPublic: p.isPublic,
              projectIsReference: p.isReference,
              datasetID: d.datasetID,
              datasetName: d.name
          } AS data1
          WITH data1
          MATCH (p:Project)-[]->(k:KeycloakUser)
          WHERE p.projectID = data1.projectID
          WITH data1, {
              creatorName: k.name,
              creatorEmail: k.email
          } as data2
          WITH data1, data2
          MATCH (p:Project)-[]->(d:Dataset)-[]->(t:Tag)
          WHERE d.datasetID in data1.datasetID
          WITH data1, data2, collect({
              tagID: t.tagID,
              category: t.category,
              name: t.name
          }) AS tags
          MATCH (d:Dataset)-[]->(c:CuratedDataset)-[]->(v:DatasetVariable)
          WHERE d.datasetID in data1.datasetID
          ${builtFilters}
          RETURN {
            projectID: data1.projectID,
            projectName: data1.projectName,
            projectDescription: data1.projectDescription,
            projectIsPublic: data1.projectIsPublic,
            projectIsReference: data1.projectIsReference,
            projectCreationDate: data1.projectCreationDate,
            creatorName: data2.creatorName,
            creatorEmail: data2.creatorEmail,
            datasetID: d.datasetID,
            datasetName: d.name,
            variableID: v.datasetVariableID,
            reference: null,
            cdr3b: v.cdr3b,
            trbv: v.trbv,
            trbj: v.trbj,
            mhc: null,
            mhcClass: null,
            epitopeGene: null,
            epitopeAAseq: null,
            epitopeSpecies: null,
            tags: tags
          } AS data
        `
        if (limit) {
          query += ` LIMIT ${limit}`;
        }
        const results = await session.run(query);
        const variables: any[] = results.records.map((record) => record.get('data'));
        if (cdr3b) {
          const maxDifferences = Math.max(1, Math.ceil(differenceFactor * cdr3b.length))
          const fuzzyResults = variables
            .filter((variable) => bitapSearch(variable.cdr3b, cdr3b, maxDifferences))
            .map((result) => ({...result, score: fuzzinessScore(result.cdr3b, cdr3b)}))
            .sort((a, b) => b.score - a.score);
          return fuzzyResults;
        } else {
          return variables.map((result) => ({...result, score: 0}))
        }
      } catch (e: any) {
        throw new ApolloError(e);
      } finally {
        session.close();
      }
    },
    // DO NOT USE THIS QUERY.
    // It will break the frontend if used.
    findElements: async (_parent, args, { driver }) => {
      const { input, page, pageSize } = args;
      const { cdr3b, projectID, text, filters, limit, differenceFactor, tags, categories } = input;
      const tagCondition = buildCondition(projectID, text, tags, categories)
      const builtFilters = buildFilters(filters);
      const session = driver.session();

      try {
        let query = `
          match (p:Project)-->(k:KeycloakUser)
          ${text?.length > 0 ? 'WHERE p.name =~ "(?i).*' + text + '.*" OR p.description =~ "(?i).*' + text + '.*"' : "" }
          optional match (p:Project)-->(d:Dataset)
          optional match (d:Dataset)-->(t:Tag)
          ${tagCondition}
          optional match (d:Dataset)-->(ca:CuratedAnnotation)-->(av:AnnotationVariable)
          optional match (d:Dataset)-->(cd:CuratedDataset)-->(dv:DatasetVariable)
          ${builtFilters}
          WITH p, k,
          [x IN collect(distinct { datasetID: d.datasetID, name: d.name }) 
            WHERE x.datasetID IS NOT NULL AND x.name IS NOT NULL] AS datasets,
          [x IN collect(distinct { tagID: t.tagID, name: t.name, category: t.category })
            WHERE x.tagID IS NOT NULL AND x.category IS NOT NULL AND x.name IS NOT NULL] AS tags,
          [x IN collect(distinct {
            variableID: coalesce(av.annotationVariableID, dv.datasetVariableID),
            reference: coalesce(av.reference, dv.reference),
            cdr3b: coalesce(av.cdr3b, dv.cdr3b),
            trav: coalesce(av.trav, dv.trav),
            traj: coalesce(av.traj, dv.traj),
            trbv: coalesce(av.trbv, dv.trbv),
            trbj: coalesce(av.trbj, dv.trbj),
            mhc: case when av.mhc is not null then av.mhc else null end,
            mhcClass: case when av.mhcClass is not null then av.mhcClass else null end,
            epitopeGene: case when av.epitopeGene is not null then av.epitopeGene else null end,
            epitopeAAseq: case when av.epitopeAAseq is not null then av.epitopeAAseq else null end,
            epitopeSpecies: case when av.epitopeSpecies is not null then av.epitopeSpecies else null end,
            mutation: case when av.mutation is not null then av.mutation else dv.mutation end,
            recognizesWTEpitope: case when av.recognizesWTEpitope is not null then av.recognizesWTEpitope else dv.recognizesWTEpitope end,
            uniProt: case when av.uniProt is not null then av.uniProt else dv.uniProt end,
            source: case when av is not null then "Annotation" else "Dataset" end
          }) WHERE x.cdr3b IS NOT NULL] AS cdr3s
          RETURN {
          project: {
              projectID: p.projectID,
              name: p.name,
              description: p.description,
              isPublic: p.isPublic,
              isReference: p.isReference,
              createdOn: p.createdOn
          },
          datasets: datasets,
          tags: tags,
          creator: {
              name: k.name,
              email: k.email
          },
          cdr3s: cdr3s
          } as result
        `
        console.log(query)
        const results: any[] = []
        console.time('query')
        const queryResults = await session.run(query);
        console.timeEnd('query')
        console.time('search')
        const records = queryResults.records.map((record) => record.get('result'))
        const maxDifferences = Math.max(1, Math.ceil(differenceFactor * cdr3b?.length))
        records.forEach((record) => {
          const { cdr3s } = record
          if (cdr3b) {
            const fuzzyResults = cdr3s
              .filter((variable) => bitapSearch(variable.cdr3b, cdr3b, maxDifferences))
              .map((result) => ({...result, score: fuzzinessScore(result.cdr3b, cdr3b)}))
              .sort((a, b) => b.score - a.score);
            // console.log(fuzzyResults)
            if (fuzzyResults.length > 0) {
              results.push({
                ...record,
                cdr3s: fuzzyResults
              })
            }
          } else {
            const scoredCDR3s = cdr3s.map((result) => ({...result, score: 0}))
            results.push({
              ...record,
              cdr3s: scoredCDR3s
            })
          }
        })
        console.timeEnd('search')
        return results
      } catch (error: any) {
        throw new ApolloError(error);
      } finally {
        session.close()
      }
    }
  },
};
