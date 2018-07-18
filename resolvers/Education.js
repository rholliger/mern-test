import Education from '../models/Education';

export default {
  Query: {
    education: () => Education.find({}),
  },
  // Mutation: {
  //   createPersonalInfo: async (_, { firstName, lastName, birthDate, mobile, email }) => {
  //     const personalInfo = new PersonalInfo({ firstName, lastName, birthDate, mobile, email });
  //     await personalInfo.save();
  //     return personalInfo;
  //   },
  //   updatePersonalInfo: async (_, parameters) => {
  //     const { id, ...object } = parameters;
  //     const newPersonalInfo = await PersonalInfo.findById(id);
  //     newPersonalInfo.set(object)
  //     await newPersonalInfo.save();
  //     return newPersonalInfo;
  //   }
  // }
}