import mongoose from "mongoose";

const DBconnection = async () => {
    const MONGO_URI = ''
    try{
       await mongoose.connect(MONGO_URI);
       console.log('Database connected successfully');
       
    }catch(error){
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBconnection;