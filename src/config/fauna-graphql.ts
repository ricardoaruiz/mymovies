import { GraphQLClient } from 'graphql-request'

const FAUNADB_GRAPHQL_URL = process.env.FAUNADB_GRAPHQL_URL || ''
const FAUNADB_GRAPHQL_SECRET = process.env.FAUNADB_GRAPHQL_SECRET || ''

const faunaDBClient = new GraphQLClient(FAUNADB_GRAPHQL_URL, {
    headers: {
        Authorization: `Bearer ${FAUNADB_GRAPHQL_SECRET}`,
    },
})

export { faunaDBClient }
