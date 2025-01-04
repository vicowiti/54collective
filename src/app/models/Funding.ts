import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the Funding document
export interface IFunding extends Document {
  companyName: string;
  fundingType: string;
  website: string;
  contactInfo?: string;
  businessStage: string;
  industryFocus: string;
  fundingAmountRange?: string;
  nonMonetarySupport?: string;
  applicationDeadline?: string;
  applicationFrequency?: string;
  requiredDocuments?: string;
  evaluationCriteria?: string;
  countryRegionFocus?: string;
  durationOfSupport?: string;
  restrictionsExclusions?: string;
  programDetails?: string;
  faqsGuidelines?: string;
  currencyOfFunding?: string;
  taxImplications?: string;
}

// Create the schema for the Funding model
const FundingSchema: Schema<IFunding> = new Schema(
  {
    companyName: {
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
    contactInfo: {
      type: String,
    },
    businessStage: {
      type: String,
      required: true,
    },
    industryFocus: {
      type: String,
      required: true,
    },
    fundingAmountRange: {
      type: String,
    },
    nonMonetarySupport: {
      type: String,
    },
    applicationDeadline: {
      type: String,
    },
    applicationFrequency: {
      type: String,
    },
    requiredDocuments: {
      type: String,
    },
    evaluationCriteria: {
      type: String,
    },
    countryRegionFocus: {
      type: String,
    },
    durationOfSupport: {
      type: String,
    },
    restrictionsExclusions: {
      type: String,
    },
    programDetails: {
      type: String,
    },
    faqsGuidelines: {
      type: String,
    },
    currencyOfFunding: {
      type: String,
    },
    taxImplications: {
      type: String,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` timestamps
  }
);

// Create the Funding model from the schema
const Funding =
  mongoose.models.Funding || mongoose.model<IFunding>("Funding", FundingSchema);

export default Funding;
