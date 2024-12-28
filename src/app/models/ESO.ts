import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the User document
export interface IEso extends Document {
  esoType: string;
  companyName: string;
  website: string;
  supportType: string;
}

// Create the schema for the User model
const EsoSchema: Schema<IEso> = new Schema(
  {
    esoType: {
      type: String,
      required: true,
    },

    supportType: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // This will automatically add `createdAt` and `updatedAt` timestamps
  }
);

// Create the User model from the schema
const Eso = mongoose.models.Eso || mongoose.model<IEso>("Eso", EsoSchema);

export default Eso;
