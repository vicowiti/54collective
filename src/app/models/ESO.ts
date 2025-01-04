import mongoose, { Document, Schema, Model } from "mongoose";

// Define the interface for the ESO document
export interface IEso extends Document {
  esoName: string;
  typeOfSupportProvided: string;
  websiteUrl: string;
  contactInformation: string;
  targetEntrepreneurs: string;
  industryFocus: string;
  eligibilityCriteria: string;
  programsOffered: string;
  programDuration: string;
  modeOfDelivery: string;
  location: string;
  regionalFocus: string;
  networkingOpportunities: string;
  alumniNetwork: string;
  impactMetrics: string;
  specialFocusAreas: string;
  partnerships: string;
  fees: string;
  applicationProcess: string;
  languagesSupported: string;
  coreServices: string;
}

// Create the schema for the ESO model
const EsoSchema: Schema<IEso> = new Schema(
  {
    esoName: {
      type: String,
      required: true,
    },
    typeOfSupportProvided: {
      type: String,
      required: true,
    },
    websiteUrl: {
      type: String,
      required: true,
    },
    contactInformation: {
      type: String,
      required: true,
    },
    targetEntrepreneurs: {
      type: String,
      required: true,
    },
    industryFocus: {
      type: String,
      required: true,
    },
    eligibilityCriteria: {
      type: String,
      required: true,
    },
    programsOffered: {
      type: String,
      required: true,
    },
    programDuration: {
      type: String,
      required: true,
    },
    modeOfDelivery: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    regionalFocus: {
      type: String,
      required: true,
    },
    networkingOpportunities: {
      type: String,
      required: true,
    },
    alumniNetwork: {
      type: String,
      required: true,
    },
    impactMetrics: {
      type: String,
      required: true,
    },
    specialFocusAreas: {
      type: String,
      required: true,
    },
    partnerships: {
      type: String,
      required: true,
    },
    fees: {
      type: String,
      required: true,
    },
    applicationProcess: {
      type: String,
      required: true,
    },
    languagesSupported: {
      type: String,
      required: true,
    },
    coreServices: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

// Create the ESO model from the schema
const Eso: Model<IEso> =
  mongoose.models.Eso || mongoose.model<IEso>("Eso", EsoSchema);

export default Eso;
