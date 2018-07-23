import mongoose, { Schema } from 'mongoose';

const contactTypeDef = `
  type Contact {
    phone: String!,
    email: String!,
    socialMedia: [SocialMedia],
  }

  type SocialMedia {
    type: String!,
    url: String!,
  }
`;

const socialMediaSchema = Schema({
  type: String,
  url: String,
});

const contactSchema = Schema({
  phone: String,
  email: String,
  socialMedia: [socialMediaSchema]
});

export default {
  typeDef: contactTypeDef,
  schema: contactSchema,
};
