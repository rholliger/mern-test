import mongoose, { Schema } from 'mongoose';

const educationTypeDef = `
  type Education {
    id: ID!,
    title: String!,
    description: String!,
    startDate: String!,
    endDate: String!,
}
`;

const educationSchema = Schema({
  title: String,
  description: String,
  startDate: String,
  endDate: String,
}, { collection: 'Education' });

const educationModel = mongoose.model('Education', educationSchema)

export default {
  typeDef: educationTypeDef,
  schema: educationSchema,
  model: educationModel
};
