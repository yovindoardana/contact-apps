import { C as Contact } from "../../../chunks/Contact.js";
const actions = {
  create: async ({ request }) => {
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
    await Contact.create(newContact);
    return { newContact };
  }
};
export {
  actions
};
