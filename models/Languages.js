import mongoose, { Schema } from 'mongoose';

const languagesTypeDef = `
  type Language {
    id: ID!,
    language: String!,
    skill: String!,
  }

  enum LanguageSkill {
    MOTHER_TONGUE,
    VERY_GOOD,
    GOOD,
  }
`;

const languagesSchema = Schema({
  language: String,
  skill: String,
});

export default {
  typeDef: languagesTypeDef,
  schema: languagesSchema,
};
