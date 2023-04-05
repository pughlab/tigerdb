import { minioClient, listBucketObjects } from '../../minio/minio'
import { ApolloError } from 'apollo-server'
import  zlib  from 'zlib';
import { extname } from 'path'
import { RESTDataSource } from '@apollo/datasource-rest';
import fetch from 'node-fetch'
import KeycloakAdminClient from '@keycloak/keycloak-admin-client';
import { OGM } from '@neo4j/graphql-ogm';
import { Driver } from 'neo4j-driver';
import { DataVariableFieldDefinition, Task } from '../../../../ui/src/types/types';
import { v4 as uuidv4 } from 'uuid';

const submitTask = async (obj, { name = "Hello world", description = "Demonstrates the most basic echo task", taskID = uuidv4(), image = "alpine", command = "ls -la /",
}, { driver, kcAdminClient, ogm }: { driver: Driver; kcAdminClient: KeycloakAdminClient; ogm: OGM; }) => {
  try {
    const TaskModel = ogm.model('Task');
    const RawDatasetModel = ogm.model('RawDataset');
    const response: Response = await fetch(
      'http://funnel:8003/v1/tasks?view=BASIC', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": taskID,
        "description": description,
        "executors": [
          {
            "image": image,
            "command": ["sh", "-c", command]
            // "command": ["sleep", "9999999"]
          }
        ]
      })
    }
    );
    const result: Task = await response.json();
    const createTaskResult = await TaskModel.create({ input: { ...result, taskID, state: 'RUNNING' } });
    const addTaskResult = await RawDatasetModel.update({
      where: { rawDatasetID: description },
      update: { funnelTasks: { connect: { where: { node: { taskID } } } } }
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new ApolloError('mutation.submitTask error');
  }
};

const funnelTaskExportDataVariableFieldDefinitions = async (obj, { dataVariableFieldDefinitionIDs }, { driver, kcAdminClient, ogm }: { driver: Driver; kcAdminClient: KeycloakAdminClient; ogm: OGM; }) => {
  try {

    const name = uuidv4()
    const description = uuidv4()
    const taskID = uuidv4()
    const image = 'funnel-base'

    const const_program = `TS_NODE_TRANSPILE_ONLY=true npx ts-node --project tsconfig.api.json api/src/funnel/programmaticExport.ts`
    const const_mode = `neo4j`
    // const const_mode = `programmatic`
    const const_permission_keys = `allowedSites,allowedStudies`
    const const_permission_values = `admin,admin`
    const const_isdelall = `ndelall` // ydelall to delete all before load
    const command = `${const_program} ${dataVariableFieldDefinitionIDs}`

    console.log(command)

    const result = submitTask(obj, { name, description, taskID, image, command }, { driver, kcAdminClient, ogm })

    return result;
  } catch (error) {
    console.log(error);
    throw new ApolloError('mutation.funnelTaskExportDataVariableFieldDefinitions error');
  }
};

const funnelTaskExportCuratedDataset = async (obj, { curatedDatasetID }, { driver, kcAdminClient, ogm }: { driver: Driver; kcAdminClient: KeycloakAdminClient; ogm: OGM; }) => {
  try {

    const DataVariableFieldDefinitionModel = ogm.model("DataVariableFieldDefinition")
    const dvfds = await DataVariableFieldDefinitionModel.find({where: {
        hasCuratedDataset: {curatedDatasetID}
      }})

    const dataVariableFieldDefinitionIDs = dvfds.map((dvfd: DataVariableFieldDefinition) => dvfd.dataVariableFieldDefinitionID)

    const result = funnelTaskExportDataVariableFieldDefinitions(obj, { dataVariableFieldDefinitionIDs }, { driver, kcAdminClient, ogm })

    return result;
  } catch (error) {
    console.log(error);
    throw new ApolloError('mutation.funnelTaskExportDataVariableFieldDefinitions error');
  }
};

const funnelTask = async (obj, { taskId }, { driver, kcAdminClient }) => {
  try {
    const response = await fetch(`http://funnel:8003/v1/tasks/${taskId}?view=FULL`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new ApolloError('query.funnelTasks error');
  }
};

const funnelTasks = async (obj, { bucketName, file }, { driver, kcAdminClient }) => {
  try {
    const response = await fetch('http://funnel:8003/v1/tasks?view=BASIC');
    const result = await response.json();
    return result.tasks;
  } catch (error) {
    console.log(error);
    throw new ApolloError('query.funnelTasks error');
  }
};

const cancelTask = async (obj, { taskId }, { driver, kcAdminClient }) => {
  try {
    const response = await fetch(
      `http://funnel:8003/v1/tasks/${taskId}:cancel`, {
      method: 'POST',
    }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new ApolloError('mutation.cancelTask error');
  }
};

export const resolvers = {
  Query: {
    funnelTasks: funnelTasks,
    funnelTask: funnelTask,
  },
  Mutation: {
    submitTask: submitTask,
    funnelTaskExportDataVariableFieldDefinitions: funnelTaskExportDataVariableFieldDefinitions,
    funnelTaskExportCuratedDataset: funnelTaskExportCuratedDataset,
    cancelTask: cancelTask,
  },
}