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
    result = 'WHERE '
    const filterArray: string[] = [];
    Object.keys(filters).forEach((key) => {
      let filterStr = ''
      filterStr += `v.${key} IN [${filters[key].map((value: string) => parseValue(value))}]`;
      filterArray.push(filterStr);
    })
    if (filterArray.length > 0) {
      result += filterArray[0] + ' AND '+ filterArray.slice(1).join(' AND ');
    }
  }
  return result;
}

function fuzzinessScore(text: string, pattern: string): number {
  if (text.length === pattern.length) {
    return 0;
  }

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
      const { cdr3b, filters, limit, differences } = input;
      const session = driver.session();

      try {
        const builtFilters = buildFilters(filters);
        let query = `MATCH (p:Project)-[]->(d:Dataset)-[]->(c:CuratedAnnotation)-[]->(v:AnnotationVariable)
          ${builtFilters}
          RETURN {
              projectID: p.projectID,
              projectName: p.name,
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
              epitopeSpecies: v.epitopeSpecies
          } AS data
          UNION
          MATCH (p:Project)-[]->(d:Dataset)-[]->(c:CuratedDataset)-[]->(v:DatasetVariable)
          ${builtFilters}
          RETURN {
              projectID: p.projectID,
              projectName: p.name,
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
              epitopeSpecies: null
          } AS data
        `
        if (limit) {
          query += ` LIMIT ${limit}`;
        }
        const results = await session.run(query);
        const variables: any[] = results.records.map((record) => record.get('data'));
        const fuzzyResults = variables
          .filter((variable) => bitapSearch(variable.cdr3b, cdr3b, differences ?? 2))
          .map((result) => ({...result, score: fuzzinessScore(result.cdr3b, cdr3b)}))
          .sort((a, b) => b.score - a.score);
        return fuzzyResults;
      } catch (e: any) {
        throw new ApolloError(e);
      } finally {
        session.close();
      }
    },
  },
};
