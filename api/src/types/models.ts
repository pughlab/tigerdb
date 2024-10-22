import { Client } from "minio";
import { Driver } from "neo4j-driver";
import { OGM } from "@neo4j/graphql-ogm";
import { WesAPI } from "../graphql/wesAPI"; // Assuming you have WesAPI imported correctly

export type MyContextType = {
  driver: Driver
  neo4jDatabase: string
  minioClient: Client
  kauth: any
  ogm: OGM; // Include OGM instance
  dataSources: {
    wesAPI: WesAPI; // Include dataSources explicitly
  };
}