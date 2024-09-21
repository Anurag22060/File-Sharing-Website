import mongoose from "mongoose";

const DBconnection = async () => {
    const MONGO_URI = `mongodb+srv://anurag:anurag31@cluster0.btpm7pk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
       await mongoose.connect(MONGO_URI);
       console.log('Database connected successfully');
       
    }catch(error){
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBconnection;
