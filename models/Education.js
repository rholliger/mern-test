import mongoose, { Schema } from 'mongoose';

const educationTypeDef = `
  type Mutation {
    updateEducation(cvid: ID!, id: ID!, title: String, description: String, startDate: String, endDate: String): Education
    insertEducation(cvid: ID!, title: String!, description: String!, startDate: String!, endDate: String): [Education]
    deleteEducation(cvid: ID! id: ID!): [Education]
  }

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
