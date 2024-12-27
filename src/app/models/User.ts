import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the User document
export interface IUser extends Document {
  email: string;
  password: string;
  gender: string;
  name: string;
  phoneNumber: string;
  isAdmin: boolean;
}

// Create the schema for the User model
const userSchema: Schema<IUser> = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // This will automatically add `createdAt` and `updatedAt` timestamps
  }
);

// Create the User model from the schema
const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
