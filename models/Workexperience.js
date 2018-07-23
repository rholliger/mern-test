import mongoose, { Schema } from 'mongoose';

const workexperienceTypeDef = `
  type Workexperience {
    id: ID!,
    companyName: String!,
    function: String!,
    description: String,
    fromDate: String!,
    toDate: String,
    tasks: [String],
  }
`;

const workexperienceSchema = Schema({
  companyName: String,
  function: String,
  description: String,
  fromDate: String,
  toDate: String,
  tasks: [String],
});

export default {
  typeDef: workexperienceTypeDef,
  schema: workexperienceSchema,
};
