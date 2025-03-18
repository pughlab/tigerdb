import { v4 as uuid4 } from "uuid";
import { ApolloError } from "apollo-server";

export const resolvers = {
  Mutation: {
    findOrCreateTag: async (_obj, args, { driver }) => {
      const { name } = args;
      const session = driver.session();

      try {
        let command = "MATCH (t:Tag { name: $name }) RETURN t";
        const result = await session.run(command, { name });

        if (result.records.length > 0) {
          return result.records[0].get('t').properties;
        }

        command = `CREATE (t:Tag { name: $name, tagID: $tagID }) RETURN t`
        const createTag = await session.run(command, { name, tagID: uuid4() })

        return createTag.records[0].get(0).properties
      } catch (error) {
        throw new ApolloError(`Could not find or create tag. Caused by ${error}`);
      } finally {
        session.close();
      }
    },
    addTagToDataset: async (_obj, args, { driver }) => {
      const { tagID, datasetID } = args;
      const session = driver.session()

      try {
        const command = `
          MATCH (d:Dataset { datasetID: $datasetID })
          MATCH (t:Tag { tagID: $tagID })
          MERGE (d)-[:HAS_TAG]->(t)
          RETURN t
        `
        const createTag = await session.run(command, { datasetID, tagID })

        return createTag.records[0].get('t').properties
      } catch (error) {
        throw new ApolloError(`Could not add tag to dataset. Caused by ${error}`)
      } finally {
        session.close()
      }
    },
    removeTagFromDataset: async (_obj, args, { driver }) => {
      const { tagID, datasetID } = args;
      const session = driver.session()

      try {
        const command = `
          MATCH (d:Dataset { datasetID: $datasetID })-[r:HAS_TAG]->(t:Tag { tagID: $tagID })
          DELETE r
          RETURN t
        `

        const removeTag = await session.run(command, { datasetID, tagID })

        return removeTag.records[0].get('t').properties
      } catch (error) {
        throw new ApolloError(`Could not remove tag from dataset. Caused by ${error}`)
      } finally {
        session.close()
      }
    },
    deleteTag: async (_obj, args, { driver }) => {
      const { tagID } = args
      const session = driver.session()

      try {
        let command =  `MATCH (d:Dataset)-[r:HAS_TAG]->(t:Tag { tagID: $tagID })
          RETURN count(r) as numberOfRelationships
        `
        const findNumberOfRelationships = await session.run(command, { tagID })
        if (findNumberOfRelationships.records[0].get('numberOfRelationships') > 0) {
          throw new Error('This tag is associated to at least one dataset.')
        }

        command = `MATCH (t:Tag { tagID: $tagID }) DELETE t`
        await session.run(command, { tagID })
        
        return tagID
      } catch (error) {
        throw new ApolloError(`Could not delete tag. Caused by ${error}`)
      } finally {
        session.close()
      }
    }
  }
};
