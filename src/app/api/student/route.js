import { dbConnection } from "@/app/utils/config/db";
import { NextResponse } from "next/server";

const connectDB = async()=>{
    await dbConnection()
}
connectDB()


export async function GET(){
    return NextResponse.json({student:"All students"})
}

console.log(process.env.MONGO_URI)