import Eso from "@/app/models/ESO";
import dbConnect from "@/app/utils/dbConnect";
import { NextResponse } from "next/server";

// Handle GET request to fetch all Esos
export async function GET() {
  try {
    // Connect to the database
    await dbConnect();

    // Fetch all Esos
    const Esos = await Eso.find();

    // Return the Esos
    return NextResponse.json(Esos, { status: 200 });
  } catch (error) {
    console.error("Error fetching Esos:", error);
    return NextResponse.json(
      { error: "Failed to fetch Esos." },
      { status: 500 }
    );
  }
}
