const { require } = require('@ungap/global-this');
const { gql } = require('apollo-server-express');
const writerType = require('./writer');
const bookType = require('./book');
const categoriesType = require('./categories');


const rootType = gql `
    type Query {
        root: String
    }
    type Mutation {
        root: String
    }
`;

 module.exports = [rootType, writerType, bookType, categoriesType];