import { GraphQLServer } from 'graphql-yoga'
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import mongoose from 'mongoose';

import CVResolver from './resolvers/CV';
import CV from './models/CV';
import Education from './models/Education';

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test')

const server = new GraphQLServer({
  typeDefs: mergeTypes([ CV.typeDef, Education.typeDef ]),
  resolvers: mergeResolvers([ CVResolver ])
});

mongoose.connection.once('open', () => {
  server.start(() => console.log('Server is running on localhost:4000'));
});