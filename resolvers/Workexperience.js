import CV from '../models/CV';

export default {
  Mutation: {
    insertWorkexperience: async (_, parameters) => {
      const { cvid, ...object } = parameters;
      const updatedCV = await CV.model.findByIdAndUpdate(cvid, {
          $addToSet: { workexperience: object }
        }, {
          new: true, upsert: true
        });
      return updatedCV.workexperience;
    },
    updateWorkexperience: async (_, parameters) => {
      const { cvid, id, ...object } = parameters;
      const currentCV = await CV.model.findById(cvid);
      const currentWorkexperience = currentCV.workexperience.id(id);
      currentWorkexperience.set(object);
      await currentCV.save();
      return currentWorkexperience;
    },
  }
}