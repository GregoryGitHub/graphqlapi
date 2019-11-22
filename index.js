'use strict'

const app = require('express')()
const expressGraphql = require('express-graphql')

const schema = require('./src/schema')
const resolvers = require('./src/resolvers')

// Configurando o middleware
app.use(
    '/graphql',
    expressGraphql({
        schema,
        rootValue: resolvers,
        graphiql: true
    })
)

app.listen(process.env.PORT || 3000)
