import mongoose, { Schema } from 'mongoose';
import Education from './Education';
import Languages from './Languages';

const cvTypeDef = `
  type Query {
    CV(id: ID!): CV
  }

  type Mutation {
    updatePersonalInfo(id: ID!, firstName: String, lastName: String, birthDate: String, mobile: String, email: String): CV
    updateEducation(id: ID!, cvid: ID!, title: String, description: String, startDate: String, endDate: String): Education
    insertEducation(cvid: ID!, title: String!, description: String!, startDate: String!, endDate: String): [Education]
    insertLanguage(cvid: ID!, language: String!, skill: LanguageSkill): [Language]
  }

  type CV {
    id: ID!,
    firstName: String!,
    lastName: String!,
    birthDate: String!,
    mobile: String!,
    email: String!,
    education: [Education],
    languages: [Language],
  }
`;

const cvSchema = Schema({
  firstName: String,
  lastName: String,
  birthDate: Date,
  mobile: Number,
  email: String,
  education: [Education.schema],
  languages: [Languages.schema],
}, { collection: 'CVs'} );

const cvModel = mongoose.model('CVs', cvSchema);

export default {
  typeDef: cvTypeDef,
  schema: cvSchema,
  model: cvModel
};
