import mongoose from "mongoose";

export const dbConnection = async()=>{
    try{
      const db= await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB!");
    }catch(error){
        console.log(error)
    }
}

