import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

console.log("MongoDB URI:",process.env.MONGO_URI);


const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error msg: ", error.message);
  }
};

export default connectToMongoDB;
