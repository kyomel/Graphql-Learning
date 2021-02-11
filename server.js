'use strict'

require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const port = process.env.port || 3000
const typeDefs = require('./graphql/schemas');
const resolvers = require('./graphql/resolvers');
const context = require('./graphql/context');
const app = express();


const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: true,
  playground: {
    settings: {
      'schema.polling.enable': false,
    },
  },
});
apolloServer.applyMiddleware({ app, path: '/api'});

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.listen(port, () => {
    console.log(`Server Start at ${Date()}`)
    console.log(`Listening at http://localhost:${port}`);
})