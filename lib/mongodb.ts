import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cached = (global as any).mongoose || null;

export async function connectToDatabase() {
  if (cached) {
    return cached;
  }

  const opts = {
    bufferCommands: false,
  };

  cached = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
    return mongoose;
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).mongoose = cached;
  return cached;
}
