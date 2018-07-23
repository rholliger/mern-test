import CV from '../models/CV';

export default {
  Mutation: {
    updateContact: async (_, { id, phone, email }) => {
      // const { id, ...object } = parameters;
      const updatedContact = await CV.model.findByIdAndUpdate(id, {
          $set: { "contact.phone": phone, "contact.email": email }
        }, { new: true });
      return updatedContact.contact;
    },
    insertSocialMedia: async (_, { id, type, url }) => {
      const updatedContact = await CV.model.findByIdAndUpdate(id, {
          $addToSet: { "contact.socialMedia": { type, url } }
        }, {
          new: true, upsert: true
        });
      return updatedContact.contact.socialMedia;
    },    
  }
}