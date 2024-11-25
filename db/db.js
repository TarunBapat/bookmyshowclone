import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}${DB_NAME}`
    );
    console.log(
      "connected to db connectionInstance",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
