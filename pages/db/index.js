import { MongoClient } from "mongodb";

export async function ConnectToDB() {
  const uri =
    "mongodb+srv://sampleuser:7d4dbmzdBj2uXvO4@clustertest.yakxb.mongodb.net/test";
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return client;
}
