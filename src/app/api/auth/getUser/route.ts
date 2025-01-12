import User from "@/app/models/User";
import dbConnect from "@/app/utils/dbConnect";
import { NextResponse } from "next/server";

// Handle GET request to fetch all events
export async function GET() {
  try {
    // Connect to the database
    await dbConnect();

    // Fetch all events
    const events = await User.find();

    // Return the events
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { error: "Failed to fetch events." },
      { status: 500 }
    );
  }
}
