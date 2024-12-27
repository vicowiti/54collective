import { NextRequest, NextResponse } from "next/server";
import Event from "@/app/models/Event";
import dbConnect from "@/app/utils/dbConnect";

// Handle POST request to create an event
export async function POST(req: NextRequest) {
  try {
    // Parse the incoming request body
    const body = await req.json();
    const { description, date, location, name, website, time } = body;

    // Validate required fields
    if (!description || !date || !location || !name || !website || !time) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Connect to the database
    await dbConnect();

    // Create and save the event
    const newEvent = new Event({
      description,
      date,
      location,
      name,
      website,
      time,
    });
    const savedEvent = await newEvent.save();

    // Return the created event
    return NextResponse.json(savedEvent, { status: 201 });
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json({ error: "Failed to create the event." }, { status: 500 });
  }
}
