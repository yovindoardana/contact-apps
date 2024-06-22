import { Contact } from '../../lib/models/ContactModel';

export const load = async () => {
	const options = [];
	const res = await fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
	const data = await res.json();
	data.forEach((item) => {
		options.push(item.name);
	});

	return {
		options
	};
};

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();

		const newContact = {
			firstname: data.get('firstname'),
			lastname: data.get('lastname'),
			phone: data.get('phone'),
			address: data.get('address'),
			state: data.get('state'),
			postal: data.get('postal'),
			email: data.get('email')
		};

		await Contact.create(newContact);
		return { newContact };
	}
};
