import mongoose, { Schema } from 'mongoose';

const certificatesTypeDef = `
  type Certificate {
    id: ID!,
    name: String!,
    type: String,
    url: String,
  }
`;

const certificatesSchema = Schema({
  name: String,
  type: String,
  url: String,
});

export default {
  typeDef: certificatesTypeDef,
  schema: certificatesSchema,
};
