import mongoose, { Schema } from 'mongoose';

const skillsTypeDef = `
  type Mutation {
    insertSkills(cvid: ID!, genre: String!, values: [String]): [Skill]
    addSkills(cvid: ID!, id: ID!, skills: [String]!): Skill
    removeGenre(cvid: ID!, id: ID!): [Skill]
  }

  type Skill {
    id: ID!,
    genre: String!,
    values: [String]!,
  }
`;

const skillsSchema = Schema({
  genre: String,
  values: [String],
});

export default {
  typeDef: skillsTypeDef,
  schema: skillsSchema,
};
