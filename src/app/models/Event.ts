import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the User document
export interface IEvent extends Document {
  description: string;
  date: string;
  location: string;
  name: string;
  website: string;
  time: string;
}

// Create the schema for the User model
const eventSchema: Schema<IEvent> = new Schema(
  {
    description: {
      type: String,
      required:true
    },
    location: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },
    website: {
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
const Event = mongoose.models.Event || mongoose.model<IEvent>("Event", eventSchema);

export default Event;
