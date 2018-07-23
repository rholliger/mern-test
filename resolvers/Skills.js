import CV from '../models/CV';

export default {
  Mutation: {
    insertSkills: async (_, { cvid, genre, values }) => {
      const updatedCV = await CV.model.findByIdAndUpdate(cvid, {
          $addToSet: { skills: { genre, values } }
        }, {
          new: true, upsert: true
        });
      return updatedCV.skills;
    },
  }
}