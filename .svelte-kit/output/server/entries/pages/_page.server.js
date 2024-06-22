import { C as Contact } from "../../chunks/Contact.js";
const load = async () => {
  let contacts = await Contact.find().exec();
  contacts = JSON.parse(JSON.stringify(contacts));
  contacts = contacts.reverse();
  return {
    contacts
  };
};
const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    const id = data.get("contactId");
    await Contact.findByIdAndDelete(id);
    return {
      success: true
    };
  }
};
export {
  actions,
  load
};
