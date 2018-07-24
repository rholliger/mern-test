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
    updateCertificate: async (_, parameters) => {
      const { cvid, id, ...object } = parameters;
      const currentCV = await CV.model.findById(cvid);
      const certificate = currentCV.certificates.id(id);
      certificate.set(object);
      await currentCV.save();
      return certificate;
    },
    deleteCertificate: async (_, { cvid, id }) => {
      const currentCV = await CV.model.findById(cvid);
      const certificate = currentCV.certificates.pull({ _id: id });
      await currentCV.save();
      return certificate;
    },
  }
}