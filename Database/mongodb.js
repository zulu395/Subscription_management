import mongoose from "mongoose";
import { NODE_ENV, DB_URI,}  from './../config/env.js';
import process from 'node:process'; // Explicitly import process

if(!DB_URI){
    throw new Error('DB_URI is not defined inside .env file');
}
const connectToDatabase = async () => {
    try{
        await mongoose.connect(DB_URI);
        console.log(`conntected to MongoDB in ${NODE_ENV} mode`);
      
    }catch(error){
        console.error('Error connecting to MongoDB:', error);

        process.exit(1); // Exit the process with failure

    }
}
export default connectToDatabase;   