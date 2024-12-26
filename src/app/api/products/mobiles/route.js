
import MobileModel from "@/app/utils/models/mobile";
import { NextResponse } from "next/server";
import { dbConnection } from "@/app/utils/config/db";

const connectDB = async () =>{
    await dbConnection();
}
connectDB();
const setCorsHeaders = (response) => {
    response.headers.set("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow these HTTP methods
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allow specific headers
    return response;
};
export async function GET(){
    try{
        
    
   const mobileData = await MobileModel.find().sort({ createdAt: -1 });
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


export async function PUT(request){
    console.log("request", request)
    try{
        const mobileID = await request.nextUrl.searchParams.get('id') 
        

        const {title,price,model} = await request.json();

        const mobileData = await MobileModel.findByIdAndUpdate(mobileID,{title,price,model})
        return NextResponse.json({message:"Mobile data updated successfully",mobileData})

    }catch(error){
        console.log(error.message)
        return NextResponse.json({error:"Error while updating mobile"})
    }
}


