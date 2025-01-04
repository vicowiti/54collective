import Eso from "@/app/models/ESO";
import dbConnect from "@/app/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

// Handle GET request to fetch all Esos
export async function GET(req: NextRequest) {
  try {
    // Connect to the database
    await dbConnect();

    // Get search parameters
    const { searchParams } = new URL(req.url);

    const searchTerm = searchParams.get("searchTerm") || "";
    const region = searchParams.get("region");
    const supportType = searchParams.get("supportType");
    const industry = searchParams.get("industry");

    console.log("myParams", searchTerm, region, supportType, industry);

    // Build a dynamic query object
    const query: {
      esoName?: { $regex: string; $options: string };
      regionalFocus?: string;
      typeOfSupportProvided?: string;
      industryFocus?: string;
    } = {};

    if (searchTerm) {
      query.esoName = { $regex: searchTerm, $options: "i" }; // Case-insensitive substring match
    }
    if (region) {
      query.regionalFocus = region;
    }
    if (supportType) {
      query.typeOfSupportProvided = supportType;
    }
    if (industry) {
      query.industryFocus = industry;
    }

    // Fetch filtered Esos or all if no filters are applied
    const Esos = await Eso.find(query);

    // Return the filtered Esos
    return NextResponse.json(Esos, { status: 200 });
  } catch (error) {
    console.error("Error fetching Esos:", error);
    return NextResponse.json(
      { error: "Failed to fetch Esos." },
      { status: 500 }
    );
  }
}
