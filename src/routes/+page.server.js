import { Contact } from '../lib/models/contact';

export const load = async () => {
	let contacts = await Contact.find().exec();

	contacts = JSON.parse(JSON.stringify(contacts));
	contacts = contacts.reverse();
	return {
		contacts
	};
};

export const actions = {
	delete: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('contactId');
		await Contact.findByIdAndDelete(id);
		return {
			success: true
		};
	}
};
