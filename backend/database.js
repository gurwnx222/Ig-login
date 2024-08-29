import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    const atlasConnectionString = process.env['DB_CONNECTION_STRING'];
    await mongoose.connect(atlasConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB database connection established successfully');
  } catch (error) {
    console.error('MongoDB database connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;