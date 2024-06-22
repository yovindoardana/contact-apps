import { connect } from 'mongoose';

const connectToDatabase = async () => {
	try {
		await connect(import.meta.env.VITE_DATABASE_LOCAL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log('Connection Successful');
	} catch (err) {
		console.error('Connection Error', err.message);
		// process.exit(1);
	}
};

export default connectToDatabase;
