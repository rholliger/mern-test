import CV from '../models/CV';

export default {
  Mutation: {
    insertLanguage: async (_, parameters) => {
      const { cvid, ...object } = parameters;
      const currentCV = await CV.model.findById(cvid);
      currentCV.languages.push(object);
      await currentCV.save();
      return currentCV.languages;
    },
  }
}