import { GraphQLServer } from 'graphql-yoga'
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import mongoose from 'mongoose';

import CVResolver from './resolvers/CV';
import CV from './models/CV';
import Contact from './models/Contact';
import Workexperience from './models/Workexperience';
import Education from './models/Education';
import Certificates from './models/Certificates';
import Languages from './models/Languages';
import Skills from './models/Skills';

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test')

const server = new GraphQLServer({
  typeDefs: mergeTypes([ CV.typeDef, Contact.typeDef, Workexperience.typeDef, Education.typeDef, Certificates.typeDef, Languages.typeDef, Skills.typeDef ]),
  resolvers: mergeResolvers([ CVResolver ])
});

mongoose.connection.once('open', () => {
  server.start(() => console.log('Server is running on localhost:4000'));
});