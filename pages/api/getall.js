// /api/new-todo
// POST /api/new-todo

import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "GET") {
    const uri =
      "mongodb+srv://sampleuser:7d4dbmzdBj2uXvO4@clustertest.yakxb.mongodb.net/test";
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const todosCollection = client.db("test").collection("todos");
    const todo = await todosCollection.find({}).toArray();
    client.close();
    if (!todo) {
      res.json({ result: true, todo });
    } else {
      res.json({ result: false });
    }
  }
}

export default handler;
