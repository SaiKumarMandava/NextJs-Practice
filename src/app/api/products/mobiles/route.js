
import MobileModel from "@/app/utils/models/mobile";
import { NextResponse } from "next/server";
import { dbConnection } from "@/app/utils/config/db";

const connectDB = async () =>{
    await dbConnection();
}
connectDB();

export async function GET(){
    try{
        
    
   const mobileData = await MobileModel.find();
    return NextResponse.json({message:"All mobile devices",mobileData})
    }catch(error){
        return NextResponse.json({error:"Error while fetching mobiles"})
    }
}





export async function POST(request){
    try{
    const {title,price,model} = await request.json();
    const mobileData = await MobileModel.create({title,price,model});
    await mobileData.save();
    
    return NextResponse.json({message:"Mobile ceated successfully",mobileData})
    }catch(error){
        return NextResponse.json({error:"Error while creating mobile"})
    }
  
}



