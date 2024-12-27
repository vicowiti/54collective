import mongoose from "mongoose";

const MONGO_URI = `mongodb+srv://viowiti12:Y7Hvj4Eu6a4UXv50@cluster0.zcoin.mongodb.net/prototype?retryWrites=true&w=majority&appName=Cluster0` 

// let isConnected = false; // Track whether the app is connected to the database

/**
 * Connect to MongoDB using Mongoose
 */
const dbConnect = async () => {
    console.log("Mongoooooooo", MONGO_URI);
    
  try {
    // Check if there is an existing connection
    if (mongoose.connection.readyState === 1) {
      // Already connected
      console.log("Already connected to MongoDB");
      return;
    }

    // If not connected, attempt to connect
    console.log("Connecting to MongoDB...");
    const db = await mongoose.connect(MONGO_URI, {
  
 
  connectTimeoutMS: 10000, // 10 seconds
  socketTimeoutMS: 10000,  // 10 seconds
});

    // Update the connection status
    console.log("db", db);
    
    const isConnected = db.connection.readyState === 1;
    if(isConnected) console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default dbConnect;
