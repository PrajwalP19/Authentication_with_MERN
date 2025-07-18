import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅🚀  MongoDB connected successfully at host: ${connection.connection.host}`); 
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:");
    console.error(error.message || error);
    process.exit(1)  // 1 = failure, 0 = success
  }
};  