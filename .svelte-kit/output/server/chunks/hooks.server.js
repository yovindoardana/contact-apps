import { connect } from "mongoose";
const connectToDatabase = async () => {
  try {
    await connect("mongodb://localhost:27017/tests", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connection Successful");
  } catch (err) {
    console.error("Connection Error", err.message);
  }
};
const handle = async ({ event, resolve }) => {
  await connectToDatabase();
  return await resolve(event);
};
export {
  handle
};
