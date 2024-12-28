import { NextRequest, NextResponse } from "next/server";
import Funding from "@/app/models/Funding";
import dbConnect from "@/app/utils/dbConnect";

// Handle POST request to create an Funding
export async function POST(req: NextRequest) {
  try {
    // Parse the incoming request body
    const body = await req.json();
    const {
      region,
      companyName,
      website,
      businessStage,
      fundingType,
      amount,
      industry,
    } = body;

    // Validate required fields
    if (
      !region ||
      !companyName ||
      !website ||
      !businessStage ||
      !fundingType ||
      !amount ||
      !industry
    ) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Connect to the database
    await dbConnect();

    // Create and save the Funding
    const newFunding = new Funding({
      region,
      companyName,
      website,
      businessStage,
      fundingType,
      amount,
      industry,
    });
    const savedFunding = await newFunding.save();

    // Return the created Funding
    return NextResponse.json(savedFunding, { status: 201 });
  } catch (error) {
    console.error("Error creating Funding:", error);
    return NextResponse.json(
      { error: "Failed to create the Funding." },
      { status: 500 }
    );
  }
}
