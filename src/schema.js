'use strict'
/**
 * Arquivo responsável por definir as Queries, Mutations, Subscriptions e
 * Tipos que a api fornecerá.
 * @autor Jose Henrique Gregório <henriquegreg45@gmail.com>
 */

const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type User {
        id: ID
        name: String
        email: String
        age: Int
    }
    type Query{
        user(id: ID!): User
        users: [User]
    }

    type Mutation{
        createUser(name: String!, email: String! age: Int!): User
    }
`)

module.exports = schema;