import mongoose, { Schema } from 'mongoose';

const contactTypeDef = `
  type Mutation {
    updateContact(id: ID!, phone: String, email: String): Contact
    insertSocialMedia(id: ID!, type: String, url: String): [SocialMedia]
    deleteSocialMedia(cvid: ID!, id: ID!): [SocialMedia]
  }

  type Contact {
    phone: String!,
    email: String!,
    socialMedia: [SocialMedia],
  }

  type SocialMedia {
    id: ID,
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
