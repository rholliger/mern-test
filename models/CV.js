import mongoose, { Schema } from 'mongoose';
import Contact from './Contact';
import Workexperience from './Workexperience';
import Education from './Education';
import Certificates from './Certificates';
import Languages from './Languages';
import Skills from './Skills';

const cvTypeDef = `
  type Query {
    CV(id: ID!): CV
  }

  type Mutation {
    updatePersonalInfo(id: ID!, firstName: String, lastName: String, birthDate: String, maritalStatus: String, imageUrl: String, motivationalSpeech: String): CV
    insertHobbies(cvid: ID!, hobbies: [String]): [String]
  }

  type CV {
    id: ID!,
    firstName: String!,
    lastName: String!,
    birthDate: String!,
    maritalStatus: String!,
    imageUrl: String,
    motivationalSpeech: String,
    contact: Contact,
    workexperience: [Workexperience],
    education: [Education],
    certificates: [Certificate],
    languages: [Language],
    skills: [Skill],
    hobbies: [String],
  }
`;

const cvSchema = Schema({
  firstName: String,
  lastName: String,
  birthDate: Date,
  maritalStatus: String,
  imageUrl: String,
  motivationalSpeech: String,
  contact: Contact.schema,
  workexperience: [Workexperience.schema],
  education: [Education.schema],
  certificates: [Certificates.schema],
  languages: [Languages.schema],
  skills: [Skills.schema],
  hobbies: [String],
}, { collection: 'CVs'} );

const cvModel = mongoose.model('CVs', cvSchema);

export default {
  typeDef: cvTypeDef,
  schema: cvSchema,
  model: cvModel
};
