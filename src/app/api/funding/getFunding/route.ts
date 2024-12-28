import Funding from "@/app/models/Funding";
import dbConnect from "@/app/utils/dbConnect";
import { NextResponse } from "next/server";

// Handle GET request to fetch all Fundings
export async function GET() {
  try {
    // Connect to the database
    await dbConnect();

    // Fetch all Fundings
    const Fundings = await Funding.find();

    // Return the Fundings
    return NextResponse.json(Fundings, { status: 200 });
  } catch (error) {
    console.error("Error fetching Fundings:", error);
    return NextResponse.json(
      { error: "Failed to fetch Fundings." },
      { status: 500 }
    );
  }
}
