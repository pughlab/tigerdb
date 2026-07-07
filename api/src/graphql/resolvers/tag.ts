import { v4 as uuid4 } from "uuid";
import { ApolloError } from "apollo-server";

async function isTagConnected(session, tagID, datasetID = '') {
  const datasetCondition = datasetID ? ' { datasetID: $datasetID }' : ''

  let command = `MATCH (d:Dataset${datasetCondition})-[r:HAS_TAG]->(t:Tag { tagID: $tagID })
    RETURN count(r) as numberOfRelationships
  `
  const findNumberOfRelationships = await session.run(command, { tagID, datasetID })

  return findNumberOfRelationships.records[0].get('numberOfRelationships') > 0
}

export const resolvers = {
  Mutation: {
    findOrCreateTag: async (_obj, args, { driver }) => {
      const { name, category } = args;
      const session = driver.session();

      try {
        let command = "MATCH (t:Tag { name: $name }) RETURN t";
        const result = await session.run(command, { name });

        if (result.records.length > 0) {
          return result.records[0].get('t').properties;
        }

        command = `CREATE (t:Tag { name: $name, tagID: $tagID, category: $category }) RETURN t`
        const createTag = await session.run(command, { name, tagID: uuid4(), category: category || 'other' })

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
        const tagConnected = await isTagConnected(session, tagID, datasetID)
        if (!tagConnected) {
          throw new Error('This tag is not associated to the specified dataset.')
        }

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
        const tagConnected = await isTagConnected(session, tagID)
        if (tagConnected) {
          throw new Error('This tag is associated to at least one dataset.')
        }

        const command = `MATCH (t:Tag { tagID: $tagID }) DELETE t`
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
