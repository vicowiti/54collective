

import { NextResponse } from "next/server";


// Handle GET request to fetch all events
export async function GET() {
  try {
    // Connect to the database
   

    // Return the events
    return NextResponse.json("Api up", { status: 200 });
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json({ error: "Failed to fetch events." }, { status: 500 });
  }
}
