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
      currentCV.education.push(object);
      await currentCV.save();
      return currentCV.education;
    },
    insertLanguage: async (_, parameters) => {
      const { cvid, ...object } = parameters;
      const currentCV = await CV.model.findById(cvid);
      currentCV.languages.push(object);
      await currentCV.save();
      return currentCV.languages;
    }
  },
  CV: {
    languages: (_, parameters) => {
      const newLanguages = [];
      for (var i = 0; i < _.languages.length; i++) {
        if(_.languages[i].skill === 'VERY_GOOD') {
          const newLanguage = _.languages[i];
          newLanguage.skill = 'Very good';
          newLanguages.push(newLanguage);
        }
      }

      return newLanguages;
    }
  }
  // CV: {
  //   lastEducation: (ceevee, { first }) => {
  //     if(first) {
  //       console.log(ceevee.education);
  //       return ceevee.education;
  //     }
  //   }
  // }
};
