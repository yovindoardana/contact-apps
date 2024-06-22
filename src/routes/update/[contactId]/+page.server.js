import { Contact } from '../../../lib/models/ContactModel';

export const load = async ({ params }) => {
	const options = [];
	const res = await fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
	const data = await res.json();
	data.forEach((item) => {
		options.push(item.name);
	});

	let contact = await Contact.findById(params.contactId);

	if (!contact)
		return {
			status: 404,
			error: 'Contact not found'
		};

	contact = JSON.parse(JSON.stringify(contact));

	return {
		contact,
		options
	};
};

export const actions = {
	update: async ({ request, params }) => {
		const data = await request.formData();
		console.log('data', data);
		const newContact = {
			firstname: data.get('firstname'),
			lastname: data.get('lastname'),
			phone: data.get('phone'),
			address: data.get('address'),
			state: data.get('state'),
			postal: data.get('postal'),
			email: data.get('email')
		};
		await Contact.findByIdAndUpdate(params.contactId, newContact);
		return { newContact };
	}
};
