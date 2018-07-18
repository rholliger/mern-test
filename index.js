import { GraphQLServer } from 'graphql-yoga'
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import mongoose from 'mongoose';

import { personalInfoTypes } from './models/PersonalInfo';
import personalInfoResolver from './resolvers/PersonalInfo';

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test')

// const AuthorSchema = Schema({
//   _id: Schema.Types.ObjectId,
//   name: String,
//   age: Number
// })

// const Author = mongoose.model('Authors', AuthorSchema);

// const ArticleSchema = Schema({
//   title: String,
//   text: String,
//   author: { type: Schema.Types.ObjectId, ref: 'Authors' }
// });

// const Article = mongoose.model('Articles', ArticleSchema);

// const typeDefs = `
//   type Query {
//     hello(name: String): String!
//     articles: [Article]
//     authors: [Author]
//   }

//   type Mutation {
//     createAuthor(name: String!, age: Int!): Author
//     createArticle(title: String!, text: String!, author: ID!): Article
//   }

//   type Article {
//     id: ID!
//     title: String!
//     text: String!
//     author: Author
//   }
// `

// const authorTypeDef = `
//   type Author {
//     id: ID!
//     name: String!
//     age: Int!
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: (_, { name }) => `Hello ${name || 'World'}`,
//     articles: () => Article.find({}).populate('author'),
//   },
//   Mutation: {
//     createAuthor: async (_, { name, age }) => {
//       const author = new Author({ name, age });
//       await author.save();
//       return author;
//     },
//     createArticle: async (_, { title, text, author }) => {
//       const article = new Article({ title, text, author });
//       await article.save();
//       return article;
//     }
//   }
// }

// const authorResolvers = {
//   Query: {
//     authors: () => Author.find({})
//   }
// }

const server = new GraphQLServer({
  typeDefs: mergeTypes([ personalInfoTypes ]),
  resolvers: mergeResolvers([ personalInfoResolver ])
});

mongoose.connection.once('open', () => {
  server.start(() => console.log('Server is running on localhost:4000'));
});