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
  const score = (1 - (nonMatchingPositions.length / pattern.length)) * 100;
  return Number.parseFloat(score.toFixed(2));
}

function bitapSearch(text: string, pattern: string, max_differences: number = 2): boolean {
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

function buildCondition(tags, categories) {
  let condition = ''
  if (tags?.length > 0 || categories?.length > 0) {
    condition += 'WHERE '
  }
  if (tags?.length > 0) {
    condition += `t.name IN [${tags.map((tag) => '"' + tag + '"').join(',')}]`
  }
  if (tags?.length > 0 && categories?.length > 0) {
    condition += ' AND '
  }
  if (categories?.length > 0) {
    condition += `t.category IN [${categories.map((category) => '"' + category + '"').join(',')}]`
  }
  return condition
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
      const { input } = args;
      const { cdr3b, filters, limit, differenceFactor, tags, categories } = input;
      const session = driver.session();
      // const tagCondition = tags?.length > 0 ? `WHERE t.name IN [${tags.map((tag) => '"' + tag + '"').join(',')}]` : ''
      // const categoryCondition = categories?.length > 0 ? `WHERE t.category IN [${categories.map((category) => '"' + category + '"').join(',')}]` : ''
      const tagCondition = buildCondition(tags, categories)

      try {
        const builtFilters = buildFilters(filters);
        let query = `MATCH (p:Project)-[]->(d:Dataset)-[]->(t:Tag)
          ${tagCondition}
          WITH p, d, collect(t.name) AS tagNames
          WITH p, d, tagNames, {
              projectID: p.projectID,
              projectName: p.name,
              datasetID: d.datasetID,
              datasetName: d.name
          } AS data1
          WITH data1
          MATCH (p:Project)-[]->(d:Dataset)-[]->(t:Tag)
          WHERE d.datasetID in data1.datasetID
          WITH data1, collect({
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
          ${tagCondition}
          WITH p, d, collect(t.name) AS tagNames
          WITH p, d, tagNames, {
              projectID: p.projectID,
              projectName: p.name,
              datasetID: d.datasetID,
              datasetName: d.name
          } AS data1
          WITH data1
          MATCH (p:Project)-[]->(d:Dataset)-[]->(t:Tag)
          WHERE d.datasetID in data1.datasetID
          WITH data1, collect({
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
        console.log(query)
        const results = await session.run(query);
        const maxDifferences = Math.max(1, Math.ceil(differenceFactor * cdr3b.length))
        const variables: any[] = results.records.map((record) => record.get('data'));
        const fuzzyResults = variables
          .filter((variable) => bitapSearch(variable.cdr3b, cdr3b, maxDifferences))
          .map((result) => ({...result, score: fuzzinessScore(result.cdr3b, cdr3b)}))
          .sort((a, b) => b.score - a.score);
        return fuzzyResults;
      } catch (e: any) {
        throw new ApolloError(e);
      } finally {
        session.close();
      }
    },
      findCDR3sPaged: async (_parent, args, { driver }) => {
      const { input } = args;
      const { cdr3b, filters, limit: queryLimit, differenceFactor = 0.2, tags, categories } = input;
      const skip = Number(args.skip) || 0;
      const limit = Number(args.limit) || queryLimit || 50;

      const session = driver.session();
      const tagCondition = buildCondition(tags, categories);

      try {
        const builtFilters = buildFilters(filters);
        let query = `MATCH (p:Project)-[]->(d:Dataset)-[]->(t:Tag)
          ${tagCondition}
          WITH p, d, collect(t.name) AS tagNames
          WITH p, d, tagNames, {
              projectID: p.projectID,
              projectName: p.name,
              datasetID: d.datasetID,
              datasetName: d.name
          } AS data1
          WITH data1
          MATCH (p:Project)-[]->(d:Dataset)-[]->(t:Tag)
          WHERE d.datasetID in data1.datasetID
          WITH data1, collect({
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
          ${tagCondition}
          WITH p, d, collect(t.name) AS tagNames
          WITH p, d, tagNames, {
              projectID: p.projectID,
              projectName: p.name,
              datasetID: d.datasetID,
              datasetName: d.name
          } AS data1
          WITH data1
          MATCH (p:Project)-[]->(d:Dataset)-[]->(t:Tag)
          WHERE d.datasetID in data1.datasetID
          WITH data1, collect({
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
        `;

        if (queryLimit) {
          // keep an optional safety limit to avoid fetching massively large sets
          query += ` LIMIT ${queryLimit * 10}`; // fetch some extra before fuzzy filtering
        }

        const results = await session.run(query);
        const variables: any[] = results.records.map((record) => record.get('data'));

        const term = (cdr3b || '').trim();
        let filtered: any[];
        if (!term) {
          // no cdr3 term: return all variables (score undefined)
          filtered = variables.map(v => ({ ...v, score: undefined }));
        } else {
          const maxDifferences = Math.max(1, Math.ceil(differenceFactor * term.length));
          filtered = variables
            .filter((variable) => bitapSearch(variable.cdr3b || '', term, maxDifferences))
            .map((result) => ({ ...result, score: fuzzinessScore(result.cdr3b || '', term) }))
            .sort((a, b) => (b.score || 0) - (a.score || 0));
        }

        const totalCount = filtered.length;
        const items = filtered.slice(skip, skip + limit);

        return {
          items,
          totalCount,
        };
      } catch (e: any) {
        throw new ApolloError(e);
      } finally {
        session.close();
      }
    },
  },
};
