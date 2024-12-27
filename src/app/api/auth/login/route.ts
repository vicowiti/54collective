import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "@/app/models/User"; // Ensure User model is imported
import dbConnect from "@/app/utils/dbConnect";

// Function for validating user credentials
const validateUser = async (email: string, password: string) => {
  // Find the user in the database
  const user = await User.findOne({ email });

  // If user is not found, return null
  if (!user) {
    return null;
  }

  // Compare the provided password with the stored hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (isPasswordValid) {
    // Return the user data (excluding password)
    const { password: _, ...userWithoutPassword } = user.toObject();
    console.log("newUser", _);
    return userWithoutPassword;
  }

  // If the password is not valid, return null
  return null;
};

// Secret key for JWT (store this securely, not in code)
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "your-secret-key";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { email, password } = await req.json();

    // Validate credentials
    const user = await validateUser(email, password);

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET_KEY,
      {
        expiresIn: "3h", // token expiration time
      }
    );

    // Set the token in a secure cookie
    const response = NextResponse.json({ message: "Login successful", user });
    response.cookies.set("token", token, {
      httpOnly: true, // Ensure the cookie is only accessible via HTTP requests (not JavaScript)
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      maxAge: 3 * 60 * 60, // 3 hours
      path: "/", // The cookie will be available for the entire site
    });

    // Respond with the user data (without password)

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
