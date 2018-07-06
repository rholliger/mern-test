import mongoose, { Schema } from 'mongoose';

export const personalInfoTypes = `
  type Query {
    personalInfo: PersonalInfo
  }

  type Mutation {
    createPersonalInfo(firstName: String!, lastName: String!, birthDate: String!, mobile: String!, email: String!): PersonalInfo
    updatePersonalInfo(id: ID!, firstName: String, lastName: String, birthDate: String, mobile: String, email: String): PersonalInfo
  }

  type PersonalInfo {
    id: ID!,
    firstName: String!,
    lastName: String!,
    birthDate: String!,
    mobile: String!,
    email: String!,
}
`;

const mongooseSchema = Schema({
  firstName: String,
  lastName: String,
  birthDate: Date,
  mobile: Number,
  email: String,
});

const PersonalInfo = mongoose.model('PersonalInfo', mongooseSchema)

export default PersonalInfo;
