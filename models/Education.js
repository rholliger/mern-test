import mongoose, { Schema } from 'mongoose';

export const educationTypes = `
  type Query {
    education: Education
  }

  type Mutation {
  }

  type Education {
    id: ID!,
    name: String!,
    type: String!,
    startDate: String!,
    endDate: String!,
}
`;

const mongooseSchema = Schema({
  name: String,
  type: String,
  startDate: Date,
  endDate: Date,
});

const Education = mongoose.model('Education', mongooseSchema)

export default Education;
