import connectToDatabase from './lib/utils/conn';

export const handle = async ({ event, resolve }) => {
	await connectToDatabase();
	return await resolve(event);
};
