import mongoose from "mongoose";
import * as dotenv from 'dotenv';
const result = dotenv.config();
if (result.error) {
    console.log('Error loading .env file:', result.error);
} else {
    console.log('Environment variables loaded successfully');
}

console.log('Mongo URI:', "mongodb+srv://anurag:anurag31@cluster0.btpm7pk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");  // This should print the URI


const DBconnection = async () => {
    
    try{
       await mongoose.connect("mongodb+srv://anurag:anurag31@cluster0.btpm7pk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
       console.log('Database connected successfully');
       
    }catch(error){
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBconnection;