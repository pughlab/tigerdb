import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import {createUploadLink} from 'apollo-upload-client'

// require('dotenv').config()

const GRAPHQL_IP = window.location.hostname

// TODO :prod url
// const link = createUploadLink({uri: process.env.NODE_ENV === 'development' ? process.env.REACT_APP_GRAPHENE_URL_DEV : process.env.REACT_APP_GRAPHENE_URL_PROD})
const link = createUploadLink({uri:`http://${GRAPHQL_IP}:8000`})

export const grapheneClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})