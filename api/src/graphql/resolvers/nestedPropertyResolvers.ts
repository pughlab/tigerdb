import { listBucketObjects, makePresignedURL } from '../../minio/minio'
import papa from 'papaparse'
import { ApolloError } from 'apollo-server'
import zlib from 'zlib'

const nestedStudyProperty = async (parent, { id, operation, property, value }, { driver, ogm, minioClient }) => {
  try {
    const session = driver.session();
    const query = `
    MATCH (s:Study)
    WHERE s.studyID = "${id}"
    SET s.${property} = apoc.coll.${operation}(s.${property}, ["${value}"])
    WITH s
    MATCH (s)-[:HAS_RAW_DATASET]-(rd:RawDataset)
    SET rd.${property} = apoc.coll.${operation}(rd.${property}, ["${value}"])
    WITH s, rd
    MATCH (rd)-[:GENERATED_CURATED_DATASET]-(cd:CuratedDataset)
    SET cd.${property} = apoc.coll.${operation}(cd.${property}, ["${value}"])
    WITH s, rd, cd
    MATCH (cd)-[r]-(dvordvfd)
    WHERE (type(r) = "HAS_DATA_VARIABLE" OR
    type(r) = "HAS_FIELD_DEFINITION") AND
    (dvordvfd:DataVariable OR
    dvordvfd:DataVariableFieldDefinition)
    SET dvordvfd.${property} = apoc.coll.${operation}(dvordvfd.${property}, ["${value}"])
    RETURN s
    `

    const result = await session.run(query)
    return result?.summary?.counters?._stats
  } catch (error) {
    console.log(error)
    throw new ApolloError('nestedStudyProperty', error )
  }
}

const nestedRawDatasetProperty = async (parent, { id, operation, property, value }, { driver, ogm, minioClient }) => {
  try {
    const session = driver.session();
    const query = `
    MATCH (rd:RawDataset)
    WHERE rd.rawDatasetID = "${id}"
    SET rd.${property} = apoc.coll.${operation}(rd.${property}, ["${value}"])
    WITH rd
    MATCH (rd)-[:GENERATED_CURATED_DATASET]-(cd:CuratedDataset)
    SET cd.${property} = apoc.coll.${operation}(cd.${property}, ["${value}"])
    WITH rd, cd
    MATCH (cd)-[r]-(dvordvfd)
    WHERE (type(r) = "HAS_DATA_VARIABLE" OR
    type(r) = "HAS_FIELD_DEFINITION") AND
    (dvordvfd:DataVariable OR
    dvordvfd:DataVariableFieldDefinition)
    SET dvordvfd.${property} = apoc.coll.${operation}(dvordvfd.${property}, ["${value}"])
    RETURN rd
    `

    const result = await session.run(query)
    return result?.summary?.counters?._stats
  } catch (error) {
    console.log(error)
    throw new ApolloError('nestedRawDatasetProperty', error )
  }
}

const nestedCuratedDatasetProperty = async (parent, { id, operation, property, value }, { driver, ogm, minioClient }) => {
  try {
    const session = driver.session();
    const query = `
    MATCH (cd:CuratedDataset)
    WHERE cd.curatedDatasetID = "${id}"
    SET cd.${property} = apoc.coll.${operation}(cd.${property}, ["${value}"])
    WITH cd
    MATCH (cd)-[r]-(dvordvfd)
    WHERE (type(r) = "HAS_DATA_VARIABLE" OR
    type(r) = "HAS_FIELD_DEFINITION") AND
    (dvordvfd:DataVariable OR
    dvordvfd:DataVariableFieldDefinition)
    SET dvordvfd.${property} = apoc.coll.${operation}(dvordvfd.${property}, ["${value}"])
    RETURN cd
    `

    const result = await session.run(query)
    return result?.summary?.counters?._stats
  } catch (error) {
    console.log(error)
    throw new ApolloError('nestedCuratedDatasetProperty', error )
  }
}

const nestedSwitch = async (parent, { nestedSwitch, id, operation, property, value }, { driver, ogm, minioClient }) => {
  try { 
    switch (nestedSwitch) {
      case 'nestedStudyProperty':
          return nestedStudyProperty(parent, { id, operation, property, value }, { driver, ogm, minioClient })
      case 'nestedRawDatasetProperty':
          return nestedRawDatasetProperty(parent, { id, operation, property, value }, { driver, ogm, minioClient })
      case 'nestedCuratedDatasetProperty':
          return nestedCuratedDatasetProperty(parent, { id, operation, property, value }, { driver, ogm, minioClient })
    }
    return null
  } catch (error) {
    console.log(error)
    throw new ApolloError('nestedSwitch', error )
  }
}

const nestedStudyDelete = async (parent, { id }, { driver, ogm, minioClient }) => {
  try { 
    const session = driver.session();
    const query = `
    CALL {
      MATCH (s:Study {studyID: "${id}"})-[:HAS_RAW_DATASET]-(rd)-[:GENERATED_CURATED_DATASET]-(cd)-[:HAS_FILE]-(mu:MinioUpload)
      DETACH DELETE mu
    }
    CALL {
      MATCH (s:Study {studyID: "${id}"})-[:HAS_RAW_DATASET]-(rd)-[:GENERATED_CURATED_DATASET]-(cd)-[:HAS_FUNNEL_TASK]-(t:Task)
      DETACH DELETE t
    }
    CALL {
      MATCH (s:Study {studyID: "${id}"})-[:HAS_RAW_DATASET]-(rd)-[:GENERATED_CURATED_DATASET]-(cd)-[r]-(dvordvfd)
      WHERE (type(r) = "HAS_DATA_VARIABLE" OR
      type(r) = "HAS_FIELD_DEFINITION") AND
      (dvordvfd:DataVariable OR
      dvordvfd:DataVariableFieldDefinition)
      DETACH DELETE dvordvfd
    }
    CALL {
      MATCH (s:Study {studyID: "${id}"})-[:HAS_RAW_DATASET]-(rd)-[:GENERATED_CURATED_DATASET]-(cd:CuratedDataset)
      DETACH DELETE cd
    }
    CALL {
      MATCH (s:Study {studyID: "${id}"})-[:HAS_RAW_DATASET]-(rd)-[:HAS_FILE]-(mu:MinioUpload)
      DETACH DELETE mu
    }
    CALL {
      MATCH (s:Study {studyID: "${id}"})-[:HAS_RAW_DATASET]-(rd)-[:HAS_FUNNEL_TASK]-(t:Task)
      DETACH DELETE t
    }
    CALL {
      MATCH (s:Study {studyID: "${id}"})-[:HAS_RAW_DATASET]-(rd)
      DETACH DELETE rd
    }
    CALL {
      MATCH (s:Study {studyID: "${id}"})
      DETACH DELETE s
    }
    `

    console.log(query)
    const result = await session.run(query)
    return result?.summary?.counters?._stats
  } catch (error) {
    console.log(error)
    throw new ApolloError('nestedStudyProperty', error )
  }
}

const nestedRawDatasetDelete = async (parent, { id }, { driver, ogm, minioClient }) => {
  try { 
    const session = driver.session();
    const query = `
    CALL {
      MATCH (rd {rawDatasetID: "${id}"})-[:GENERATED_CURATED_DATASET]-(cd)-[:HAS_FILE]-(mu:MinioUpload)
      DETACH DELETE mu
    }
    CALL {
      MATCH (rd {rawDatasetID: "${id}"})-[:GENERATED_CURATED_DATASET]-(cd)-[:HAS_FUNNEL_TASK]-(t:Task)
      DETACH DELETE t
    }
    CALL {
      MATCH (rd {rawDatasetID: "${id}"})-[:GENERATED_CURATED_DATASET]-(cd)-[r]-(dvordvfd)
      WHERE (type(r) = "HAS_DATA_VARIABLE" OR
      type(r) = "HAS_FIELD_DEFINITION") AND
      (dvordvfd:DataVariable OR
      dvordvfd:DataVariableFieldDefinition)
      DETACH DELETE dvordvfd
    }
    CALL {
      MATCH (rd {rawDatasetID: "${id}"})-[:GENERATED_CURATED_DATASET]-(cd:CuratedDataset)
      DETACH DELETE cd
    }
    CALL {
      MATCH (rd {rawDatasetID: "${id}"})-[:HAS_FILE]-(mu:MinioUpload)
      DETACH DELETE mu
    }
    CALL {
      MATCH (rd {rawDatasetID: "${id}"})-[:HAS_FUNNEL_TASK]-(t:Task)
      DETACH DELETE t
    }
    CALL {
      MATCH (rd:RawDataset {rawDatasetID: "${id}"})
      DETACH DELETE rd
    }
    `

    console.log(query)
    const result = await session.run(query)
    return result?.summary?.counters?._stats
  } catch (error) {
    console.log(error)
    throw new ApolloError('nestedStudyProperty', error )
  }
}

const nestedCuratedDatasetDelete = async (parent, { id }, { driver, ogm, minioClient }) => {
  try { 
    const session = driver.session();
    const query = `
    CALL {
      MATCH (cd {curatedDatasetID: "${id}"})-[:HAS_FILE]-(mu:MinioUpload)
      DETACH DELETE mu
    }
    CALL {
      MATCH (cd {curatedDatasetID: "${id}"})-[:HAS_FUNNEL_TASK]-(t:Task)
      DETACH DELETE t
    }
    CALL {
      MATCH (cd {curatedDatasetID: "${id}"})-[r]-(dvordvfd)
      WHERE (type(r) = "HAS_DATA_VARIABLE" OR
      type(r) = "HAS_FIELD_DEFINITION") AND
      (dvordvfd:DataVariable OR
      dvordvfd:DataVariableFieldDefinition)
      DETACH DELETE dvordvfd
    }
    CALL {
      MATCH (cd {curatedDatasetID: "${id}"})
      DETACH DELETE cd
    }
    `

    console.log(query)
    const result = await session.run(query)
    return result?.summary?.counters?._stats
  } catch (error) {
    console.log(error)
    throw new ApolloError('nestedStudyProperty', error )
  }
}

const nestedSwitchDelete = async (parent, { nestedSwitchDelete, id }, { driver, ogm, minioClient }) => {
  try { 
    switch (nestedSwitchDelete) {
      case 'nestedStudyDelete':
          return nestedStudyDelete(parent, { id, }, { driver, ogm, minioClient })
      case 'nestedRawDatasetDelete':
          return nestedRawDatasetDelete(parent, { id, }, { driver, ogm, minioClient })
      case 'nestedCuratedDatasetDelete':
          return nestedCuratedDatasetDelete(parent, { id, }, { driver, ogm, minioClient })
    }
    return null
  } catch (error) {
    console.log(error)
    throw new ApolloError('nestedSwitch', error )
  }
}

export const resolvers = {
  Query: {

  },
  Mutation: {
    nestedStudyProperty: nestedStudyProperty,
    nestedRawDatasetProperty: nestedRawDatasetProperty,
    nestedCuratedDatasetProperty: nestedCuratedDatasetProperty,
    nestedSwitch: nestedSwitch,
    nestedStudyDelete: nestedStudyDelete,
    nestedRawDatasetDelete: nestedRawDatasetDelete,
    nestedCuratedDatasetDelete: nestedCuratedDatasetDelete,
    nestedSwitchDelete: nestedSwitchDelete,
  },
}