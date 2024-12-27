import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "@/app/models/User"; // Make sure the User model is correctly imported
import dbConnect from "@/app/utils/dbConnect";


// Secret key for JWT (store this securely, not in code)
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "your-secret-key";

// Function to register a new user
export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { email, password, name, phoneNumber, isAdmin, gender } = await req.json();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    const newUser = new User({
      email,
      password: hashedPassword,
      name,
      gender,
      phoneNumber,
      isAdmin,
    });

    // Save the user to the database
    await newUser.save();

    // Exclude the password from the user object before returning it
    const { password: _, ...userWithoutPassword } = newUser.toObject();

    console.log("newUser", _);
    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      JWT_SECRET_KEY,
      {
        expiresIn: "3h", // Token expiration time (3 hours)
      }
    );

    // Set the token in a secure, HTTP-only cookie
    const response = NextResponse.json({
      message: "User created successfully",
      user: userWithoutPassword,
    });
    response.cookies.set("token", token, {
      httpOnly: true, // Ensures the cookie is only accessible via HTTP requests (not JavaScript)
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production (requires HTTPS)
      maxAge: 3 * 60 * 60, // 3 hours
      path: "/", // The cookie will be available for the entire site
    });

    // Respond with the user data (without the password)
    response.json();

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
