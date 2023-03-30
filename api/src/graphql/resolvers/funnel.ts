import { minioClient, listBucketObjects } from '../../minio/minio'
import { ApolloError } from 'apollo-server'
import  zlib  from 'zlib';
import { extname } from 'path'
import { RESTDataSource } from '@apollo/datasource-rest';
import fetch from 'node-fetch'
import KeycloakAdminClient from '@keycloak/keycloak-admin-client';
import { OGM } from '@neo4j/graphql-ogm';
import { Driver } from 'neo4j-driver';
import { Task } from '../../../../ui/src/types/types';
import { v4 as uuidv4 } from 'uuid';

export const resolvers = {
  Query: {
    funnelTasks: async (obj, { bucketName, file }, { driver, kcAdminClient }) => {
      try {
        const response = await fetch('http://funnel:8003/v1/tasks?view=BASIC')
        const result = await response.json()
        return result.tasks
      } catch (error) {
        console.log(error)
        throw new ApolloError('query.funnelTasks error')
      }
    },
    funnelTask: async (obj, { taskId }, { driver, kcAdminClient }) => {
      try {
        const response = await fetch(`http://funnel:8003/v1/tasks/${taskId}?view=FULL`)
        const result = await response.json()
        return result
      } catch (error) {
        console.log(error)
        throw new ApolloError('query.funnelTasks error')
      }
    },
  },
  Mutation: {
    submitTask: async (obj, { name="Hello world",
                              description="Demonstrates the most basic echo task",
                              taskID=uuidv4(),
                              image="alpine",
                              command="ls -la /",
                            }, { driver, kcAdminClient, ogm }: { driver: Driver, kcAdminClient: KeycloakAdminClient, ogm: OGM }) => {
      try {
        const TaskModel = ogm.model('Task')
        const response: Response = await fetch(
          'http://funnel:8003/v1/tasks?view=BASIC', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "name": taskID,
              "description": taskID,
              "executors": [
                {
                  "image": image,
                  "command": ["sh", "-c", command]
                  // "command": ["sleep", "9999999"]
                }
              ]
            })
          }
          )
        const result: Task = await response.json()
        const res = await TaskModel.create({input: {...result, taskID, state: 'RUNNING'}})
        return result
      } catch (error) {
        console.log(error)
        throw new ApolloError('mutation.submitTask error')
      }
    },
    cancelTask: async (obj, { taskId }, { driver, kcAdminClient }) => {
      try {
        const response = await fetch(
          `http://funnel:8003/v1/tasks/${taskId}:cancel`, {
            method: 'POST',
          }
          )
        const result = await response.json()
        return result
      } catch (error) {
        console.log(error)
        throw new ApolloError('mutation.cancelTask error')
      }
    },
  },
}