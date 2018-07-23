import CV from '../models/CV'

export default {
  Mutation: {
    insertCertificate: async (_, { cvid, name, type, url }) => {
      const updatedCV = await CV.model.findByIdAndUpdate(cvid, {
          $addToSet: { certificates: { name, type, url } }
        }, {
          new: true, upsert: true
        });
      return updatedCV.certificates;
    },
  }
}