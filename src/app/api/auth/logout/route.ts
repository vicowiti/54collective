import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Create a response object
    const response = NextResponse.json({ message: "Logged out successfully" });

    // Clear the token cookie by setting it to a past expiration date
    response.cookies.set("token", "", {
      httpOnly: true, // Makes sure the cookie is only accessible via HTTP requests (not JavaScript)
      secure: process.env.NODE_ENV === "production", // Ensure the cookie is only sent over HTTPS in production
      maxAge: 0, // Setting maxAge to 0 will cause the cookie to expire immediately
      path: "/", // The cookie will be available for the entire site
    });

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
