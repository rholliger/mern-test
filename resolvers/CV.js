import CV from '../models/CV';
import Education from '../models/Education';

export default {
  Query: {
    CV: (_, { id }) => CV.model.findById(id),
  },
  Mutation: {
    updatePersonalInfo: async (_, parameters) => {
      const { id, ...object } = parameters;
      const updatedInfo = await CV.model.findById(id);
      updatedInfo.set(object)
      await updatedInfo.save();
      return updatedInfo;
    },
    updateEducation: async (_, parameters) => {
      const { cvid, id, ...object } = parameters;
      const currentCV = await CV.model.findById(cvid);
      const updatedEducation = currentCV.education.id(id);
      updatedEducation.set(object);
      await currentCV.save();
      return updatedEducation;
    },
    insertEducation: async (_, parameters) => {
      const { cvid, ...object } = parameters;
      const currentCV = await CV.model.findById(cvid);
      const newEducation = new Education.model(object);
      currentCV.education.push(newEducation);
      await currentCV.save();
      return currentCV.education;
    }
  },
  // CV: {
  //   lastEducation: (ceevee, { first }) => {
  //     if(first) {
  //       console.log(ceevee.education);
  //       return ceevee.education;
  //     }
  //   }
  // }
};
