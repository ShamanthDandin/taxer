import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://shamanth019:sampi019@taxer1.m0vmk.mongodb.net/?retryWrites=true&w=majority&appName=Taxer1";


let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function conn() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
    console.log("connected to db")
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default conn;
