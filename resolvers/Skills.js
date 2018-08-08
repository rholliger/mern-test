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
    addSkills: async (_, { cvid, id, skills }) => {
      const currentCV = await CV.model.findById(cvid);
      const currentGenre = currentCV.skills.id(id);

      const updatedCV = await CV.model.update({ _id: cvid, 'skills._id': id }, {
        $addToSet: { 'skills.$.values': skills }
      }, {
        new: true, upsert: true
      });
      return currentGenre;
    },
    removeGenre: async (_, { cvid, id }) => {
      const currentCV = await CV.model.findById(cvid);
      currentCV.skills.pull({ _id: id });
      await currentCV.save();
      return currentCV.skills; // Is this needed for deletion?
    },
  }
}