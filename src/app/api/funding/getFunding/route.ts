import Funding from "@/app/models/Funding";
import dbConnect from "@/app/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

// Handle GET request to fetch all Fundings
export async function GET(req: NextRequest) {
  try {
    // Connect to the database
    await dbConnect();

    // Get search parameters
    const { searchParams } = new URL(req.url);
    const searchTerm = searchParams.get("searchTerm") || "";
    const region = searchParams.get("region");
    const fundingType = searchParams.get("fundingType");
    const industry = searchParams.get("industry");
    const amount = searchParams.get("amount");

    // Build a dynamic query object
    const query: {
      companyName?: { $regex: string; $options: string };
      region?: string;
      fundingType?: string;
      industry?: string;
      amount?: number;
    } = {};

    if (searchTerm) {
      query.companyName = { $regex: searchTerm, $options: "i" }; // Case-insensitive substring match
    }
    if (region) {
      query.region = region;
    }
    if (fundingType) {
      query.fundingType = fundingType;
    }
    if (industry) {
      query.industry = industry;
    }
    if (amount) {
      query.amount = Number(amount); // Ensure the amount is a number
    }

    // Fetch filtered Fundings or all if no filters are applied
    const Fundings = await Funding.find(query);

    // Return the filtered Fundings
    return NextResponse.json(Fundings, { status: 200 });
  } catch (error) {
    console.error("Error fetching Fundings:", error);
    return NextResponse.json(
      { error: "Failed to fetch Fundings." },
      { status: 500 }
    );
  }
}
