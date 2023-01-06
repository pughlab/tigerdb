import { minioClient, listBucketObjects } from '../../minio/minio'
import { ApolloError } from 'apollo-server'
import  zlib  from 'zlib';
import { extname } from 'path'
import { RESTDataSource } from '@apollo/datasource-rest';
import fetch from 'node-fetch'

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
  },
  Mutation: {
    submitTask: async (obj, { bucketName, file }, { driver, kcAdminClient }) => {
      try {
        const response = await fetch(
          'http://funnel:8003/v1/tasks?view=BASIC', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "name": "Hello world",
              "description": "Demonstrates the most basic echo task.",
              "executors": [
                {
                  "image": "alpine",
                  "command": ["echo", "hello world"]
                  // "command": ["sleep", "9999999"]
                }
              ]
            })
          }
          )
        const result = await response.json()
        return result
      } catch (error) {
        console.log(error)
        throw new ApolloError('mutation.submitTask error')
      }
    },
    cancelTask: async (obj, { taskId }, { driver, kcAdminClient }) => {
      try {
        const response = await fetch(`http://funnel:8003/v1/tasks/${taskId}:cancel`)
        // const text = await response.text()
        const result = await response.json()
        return result
      } catch (error) {
        console.log(error)
        throw new ApolloError('mutation.cancelTask error')
      }
    },
  },
}