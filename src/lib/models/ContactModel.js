import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	postal: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	}
});

export const Contact = mongoose.model('Contact', contactSchema);
