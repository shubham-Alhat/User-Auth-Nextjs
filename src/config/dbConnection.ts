import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.DB_URI!);
    console.log(
      `\n database connected.. DB_HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGO_DB CONNECTION ERROR:", error);
    throw error; // dont use process.exit(1) in next js application
  }
};

export default connectToDb;
