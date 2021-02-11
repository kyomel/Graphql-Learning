const { gql } = require('apollo-server-express');

const rootType = gql`
 type Query {
     root: String
 }
 type mutation {
     root: String
 }
 `;

 module.exports = [rootType];