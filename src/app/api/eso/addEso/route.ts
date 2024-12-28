import { NextRequest, NextResponse } from "next/server";
import Eso from "@/app/models/ESO";
import dbConnect from "@/app/utils/dbConnect";

// Handle POST request to create an Eso
export async function POST(req: NextRequest) {
  try {
    // Parse the incoming request body
    const body = await req.json();
    const { esoType, companyName, website, supportType } = body;

    // Validate required fields
    if (!esoType || !companyName || !website || !supportType) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    } 

    // Connect to the database
    await dbConnect();

    // Create and save the Eso
    const newEso = new Eso({
      esoType,
      companyName,
      website,
      supportType,
    });
    const savedEso = await newEso.save();

    // Return the created Eso
    return NextResponse.json(savedEso, { status: 201 });
  } catch (error) {
    console.error("Error creating Eso:", error);
    return NextResponse.json(
      { error: "Failed to create the Eso." },
      { status: 500 }
    );
  }
}
