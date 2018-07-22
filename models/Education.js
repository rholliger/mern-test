import mongoose, { Schema } from 'mongoose';

const educationTypeDef = `
  type Education {
    id: ID!,
    title: String!,
    description: String!,
    startDate: String!,
    endDate: String!,
}
`;

const educationSchema = Schema({
  title: String,
  description: String,
  startDate: String,
  endDate: String,
});

export default {
  typeDef: educationTypeDef,
  schema: educationSchema,
};
