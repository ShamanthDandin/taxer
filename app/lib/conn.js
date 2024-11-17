import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://shamanth019:sampi019@taxer1.m0vmk.mongodb.net/Taxer1?retryWrites=true&w=majority";

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Global cache for reusing the connection in development
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function conn() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: 'Taxer1', // Set the database name explicitly
      })
      .then((mongoose) => {
        console.log('Connected to MongoDB');
        return mongoose;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default conn;
