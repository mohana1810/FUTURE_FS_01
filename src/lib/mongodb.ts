import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI");
}

declare global {
  // eslint-disable-next-line no-var
  var __mongoClientPromise: Promise<MongoClient> | undefined;
}

const client = new MongoClient(uri);

const clientPromise =
  global.__mongoClientPromise ?? client.connect();

if (!global.__mongoClientPromise) {
  global.__mongoClientPromise = clientPromise;
}

export default clientPromise;