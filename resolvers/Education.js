import CV from '../models/CV';

export default {
  Mutation: {
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
      currentCV.education.push(object);
      await currentCV.save();
      return currentCV.education;
    },
  }
}