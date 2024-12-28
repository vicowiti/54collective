import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the User document
export interface IFunding extends Document {
  
  companyName: string;
  industry: string;
  region: string
  businessStage: string;
  fundingType: string;
  website: string;
  amount: number;
  
}

// Create the schema for the User model
const FundingSchema: Schema<IFunding> = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    businessStage: {
      type: String,
      required: true,
    },
    fundingType: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // This will automatically add `createdAt` and `updatedAt` timestamps
  }
);

// Create the User model from the schema
const Funding = mongoose.models.Funding || mongoose.model<IFunding>("Funding", FundingSchema);

export default Funding;
