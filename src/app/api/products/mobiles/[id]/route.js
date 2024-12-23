import MobileModel from "@/app/utils/models/mobile";
import { NextResponse } from "next/server";
import { dbConnection } from "@/app/utils/config/db";
import { parseAppSegmentConfig } from "next/dist/build/segment-config/app/app-segment-config";

const connectDB = async () => {
  await dbConnection();
};
connectDB();

export async function GET(req, { params }) {
  console.log(params);

  const { id } = await params;
  console.log(id);

  try {
    const mobileData = await MobileModel.findById(id);
    if (!mobileData) {
      return NextResponse.json({ error: "Mobile not found" });
    }
    return NextResponse.json({ message: "Mobile device found", mobileData });
  } catch (error) {
    return NextResponse.json({ error: "Error while fetching mobiles" });
  }
}

//delete methid
export async function DELETE(req, { params }) {
  console.log(params);

  const { id } = await params;
  console.log(id);
  try {
    const mobileData = await MobileModel.findByIdAndDelete(id);
    if (!mobileData) {
      return NextResponse.json({ error: "Mobile not found" });
    }
    return NextResponse.json({
      message: "Mobile device deleted successfulyy",
      mobileData,
    });
  } catch (error) {
    return NextResponse.json({ error: "Error while fetching mobile" });
  }
}
