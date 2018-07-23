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
    updatePersonalInfo(id: ID!, firstName: String, lastName: String, birthDate: String, mobile: String, email: String): CV
    insertWorkexperience(cvid: ID!, companyName: String!, function: String!, description: String, fromDate: String!, toDate: String, tasks: [String]): [Workexperience]
    updateEducation(id: ID!, cvid: ID!, title: String, description: String, startDate: String, endDate: String): Education
    insertEducation(cvid: ID!, title: String!, description: String!, startDate: String!, endDate: String): [Education]
    insertCertificate(cvid: ID!, name: String!, type: String, url: String): [Certificate]
    insertLanguage(cvid: ID!, language: String!, skill: LanguageSkill): [Language]
    insertSkills(cvid: ID!, genre: String!, values: [String]): [Skill]
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
