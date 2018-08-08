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
    updateLanguageSkill: async (_, { cvid, id, skill }) => {
      // const { cvid, ...object } = parameters;
      const currentCV = await CV.model.findById(cvid);
      const language = currentCV.languages.id(id);
      language.skill = skill;
      await currentCV.save();
      return language;
    },
  }
}