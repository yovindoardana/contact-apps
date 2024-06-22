import { C as Contact } from "../../../../chunks/Contact.js";
const load = async ({ params }) => {
  let contact = await Contact.findById(params.contactId);
  if (!contact)
    return {
      status: 404,
      error: "Contact not found"
    };
  contact = JSON.parse(JSON.stringify(contact));
  console.log("contact", contact);
  return {
    contact
  };
};
const actions = {
  update: async ({ request, params }) => {
    const data = await request.formData();
    console.log("data", data);
    const newContact = {
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      phone: data.get("phone"),
      address: data.get("address"),
      state: data.get("state"),
      postal: data.get("postal"),
      email: data.get("email")
    };
    await Contact.findByIdAndUpdate(params.contactId, newContact);
    return { newContact };
  }
};
export {
  actions,
  load
};
