import mongoose, { Schema } from 'mongoose';

const educationTypeDef = `
  type Mutation {
    updateEducation(id: ID!, cvid: ID!, title: String, description: String, startDate: String, endDate: String): Education
    insertEducation(cvid: ID!, title: String!, description: String!, startDate: String!, endDate: String): [Education]
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
