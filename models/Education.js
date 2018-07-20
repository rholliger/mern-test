import mongoose, { Schema } from 'mongoose';

const educationTypeDef = `
  type Education {
    id: ID!,
    name: String!,
    type: String!,
    startDate: String!,
    endDate: String!,
}
`;

const educationSchema = Schema({
  name: String,
  type: String,
  startDate: String,
  endDate: String,
}, { collection: 'Education' });

const educationModel = mongoose.model('Education', educationSchema)

export default {
  typeDef: educationTypeDef,
  schema: educationSchema,
  model: educationModel
};
