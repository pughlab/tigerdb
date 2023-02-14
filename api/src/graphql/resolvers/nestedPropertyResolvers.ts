import { listBucketObjects, makePresignedURL } from '../../minio/minio'
import papa from 'papaparse'
import { ApolloError } from 'apollo-server'
import zlib from 'zlib'


export const resolvers = {
  Query: {

  },
  Mutation: {
    nestedStudyProperty: async (parent, { id, operation, property, value }, { driver, ogm, minioClient }) => {
      try {
        const session = driver.session();
        const query = `
        match (h:Study)-[:HAS_RAW_DATASET]-(i:RawDataset)-[:GENERATED_CURATED_DATASET]-(j:CuratedDataset)-[:HAS_DATA_VARIABLE]-(k:DataVariable)-[:HAS_FIELD]-(l:DataVariableField)-[:HAS_FIELD_DEFINITION]-(m:DataVariableFieldDefinition)-[:HAS_FIELD_VALUE]-(n:DataVariableValue)
        where h.studyID = "${id}"
        set h.${property} = apoc.coll.${operation}(h.${property}, ["${value}"])
        set i.${property} = apoc.coll.${operation}(i.${property}, ["${value}"])
        set j.${property} = apoc.coll.${operation}(j.${property}, ["${value}"])
        set k.${property} = apoc.coll.${operation}(k.${property}, ["${value}"])
        set l.${property} = apoc.coll.${operation}(l.${property}, ["${value}"])
        set m.${property} = apoc.coll.${operation}(m.${property}, ["${value}"])
        set n.${property} = apoc.coll.${operation}(n.${property}, ["${value}"])
        return n
        `

        const result = await session.run(query)
        return true
      } catch (error) {
        console.log(error)
        throw new ApolloError('nestedStudyProperty', error )
      }
    },
    nestedRawDatasetProperty: async (parent, { id, operation, property, value }, { driver, ogm, minioClient }) => {
      try {
        const session = driver.session();
        const query = `
        match (i:RawDataset)-[:GENERATED_CURATED_DATASET]-(j:CuratedDataset)-[:HAS_DATA_VARIABLE]-(k:DataVariable)-[:HAS_FIELD]-(l:DataVariableField)-[:HAS_FIELD_DEFINITION]-(m:DataVariableFieldDefinition)-[:HAS_FIELD_VALUE]-(n:DataVariableValue)
        where i.rawDatasetID = "${id}"
        set i.${property} = apoc.coll.${operation}(i.${property}, ["${value}"])
        set j.${property} = apoc.coll.${operation}(j.${property}, ["${value}"])
        set k.${property} = apoc.coll.${operation}(k.${property}, ["${value}"])
        set l.${property} = apoc.coll.${operation}(l.${property}, ["${value}"])
        set m.${property} = apoc.coll.${operation}(m.${property}, ["${value}"])
        set n.${property} = apoc.coll.${operation}(n.${property}, ["${value}"])
        return n
        `

        const result = await session.run(query)
        return true
      } catch (error) {
        console.log(error)
        throw new ApolloError('nestedRawDatasetProperty', error )
      }
    },
    nestedCuratedDatasetProperty: async (parent, { id, operation, property, value }, { driver, ogm, minioClient }) => {
      try {
        const session = driver.session();
        const query = `
        match (j:CuratedDataset)-[:HAS_DATA_VARIABLE]-(k:DataVariable)-[:HAS_FIELD]-(l:DataVariableField)-[:HAS_FIELD_DEFINITION]-(m:DataVariableFieldDefinition)-[:HAS_FIELD_VALUE]-(n:DataVariableValue)
        where j.curatedDatasetID = "${id}"
        set j.${property} = apoc.coll.${operation}(j.${property}, ["${value}"])
        set k.${property} = apoc.coll.${operation}(k.${property}, ["${value}"])
        set l.${property} = apoc.coll.${operation}(l.${property}, ["${value}"])
        set m.${property} = apoc.coll.${operation}(m.${property}, ["${value}"])
        set n.${property} = apoc.coll.${operation}(n.${property}, ["${value}"])
        return n
        `

        const result = await session.run(query)
        return true
      } catch (error) {
        console.log(error)
        throw new ApolloError('nestedCuratedDatasetProperty', error )
      }
    },
    nestedDataVariableProperty: async (parent, { id, operation, property, value }, { driver, ogm, minioClient }) => {
      try {
        const session = driver.session();
        const query = `
        match (k:DataVariable)-[:HAS_FIELD]-(l:DataVariableField)-[:HAS_FIELD_DEFINITION]-(m:DataVariableFieldDefinition)-[:HAS_FIELD_VALUE]-(n:DataVariableValue)
        where k.dataVariableID = "${id}"
        set k.${property} = apoc.coll.${operation}(k.${property}, ["${value}"])
        set l.${property} = apoc.coll.${operation}(l.${property}, ["${value}"])
        set m.${property} = apoc.coll.${operation}(m.${property}, ["${value}"])
        set n.${property} = apoc.coll.${operation}(n.${property}, ["${value}"])
        return n
        `

        const result = await session.run(query)
        return true
      } catch (error) {
        console.log(error)
        throw new ApolloError('nestedDataVariableProperty', error )
      }
    },
    nestedDataVariableFieldProperty: async (parent, { id, operation, property, value }, { driver, ogm, minioClient }) => {
      try {
        const session = driver.session();
        const query = `
        match (l:DataVariableField)-[:HAS_FIELD_DEFINITION]-(m:DataVariableFieldDefinition)-[:HAS_FIELD_VALUE]-(n:DataVariableValue)
        where l.dataVariableFieldID = "${id}"
        set l.${property} = apoc.coll.${operation}(l.${property}, ["${value}"])
        set m.${property} = apoc.coll.${operation}(m.${property}, ["${value}"])
        set n.${property} = apoc.coll.${operation}(n.${property}, ["${value}"])
        return n
        `

        const result = await session.run(query)
        return true
      } catch (error) {
        console.log(error)
        throw new ApolloError('nestedDataVariableFieldProperty', error )
      }
    },
    nestedDataVariableDefinitionProperty: async (parent, { id, operation, property, value }, { driver, ogm, minioClient }) => {
      try {
        const session = driver.session();
        const query = `
        match (m:DataVariableFieldDefinition)-[:HAS_FIELD_VALUE]-(n:DataVariableValue)
        where m.dataVariableFieldDefinitionID = "${id}"
        set m.${property} = apoc.coll.${operation}(m.${property}, ["${value}"])
        set n.${property} = apoc.coll.${operation}(n.${property}, ["${value}"])
        return n
        `

        const result = await session.run(query)
        return true
      } catch (error) {
        console.log(error)
        throw new ApolloError('nestedDataVariableDefinitionProperty', error )
      }
    },
    nestedDataVariableValueProperty: async (parent, { id, operation, property, value }, { driver, ogm, minioClient }) => {
      try {
        const session = driver.session();
        const query = `
        match (n:DataVariableValue)
        where n.dataVariableValueID = "${id}"
        set n.${property} = apoc.coll.${operation}(n.${property}, ["${value}"])
        return n
        `

        const result = await session.run(query)
        return true
      } catch (error) {
        console.log(error)
        throw new ApolloError('nestedDataVariableValueProperty', error )
      }
    },


    nestedCuratedDatasetPermissions: async (parent, { id, operation, property, value }, { driver, ogm, minioClient }) => {
      try {
        const session = driver.session();
        const query = `
        match (j:CuratedDataset)-[:HAS_DATA_VARIABLE|:HAS_FIELD_DEFINITION]-(k)
        where j.curatedDatasetID = "40bb621b-b7c6-4a8a-a246-97eec3d1c967"
        set j.\`${property}\` = apoc.coll.${operation}(j.\`${property}\`, ["${value}"])
        set k.\`${property}\` = apoc.coll.${operation}(k.\`${property}\`, ["${value}"])
        return j
        `

        const result = await session.run(query)
        return true
      } catch (error) {
        console.log(error)
        throw new ApolloError('nestedCuratedDatasetPermissions', error )
      }
    }
  },
}