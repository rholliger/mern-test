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
    insertHobbies: async (_, { cvid, hobbies }) => {
      const updatedCV = await CV.model.findByIdAndUpdate(cvid, {
          $addToSet: { hobbies: hobbies }
        }, {
          new: true, upsert: true
        });
      return updatedCV.hobbies;
    },
  },
  CV: {
    languages: (_, parameters) => {
      const newLanguages = [];
      for (var i = 0; i < _.languages.length; i++) {
        const newLanguage = _.languages[i];
        switch(_.languages[i].skill) {
          case 'VERY_GOOD':
            newLanguage.skill = 'Very good';
            break;
          case 'GOOD':
            newLanguage.skill = 'Good';
            break;
          case 'MOTHER_TONGUE':
            newLanguage.skill = 'Mother Tongue';
            break;
        };

        newLanguages.push(newLanguage);
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
