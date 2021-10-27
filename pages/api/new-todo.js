// /api/new-todo
// POST /api/new-todo

import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const uri =
      "mongodb+srv://sampleuser:7d4dbmzdBj2uXvO4@clustertest.yakxb.mongodb.net/test";
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // // Get All Database
    client.connect(async (err) => {
      if (!err) {
        try {
          const todos = client.db("test").collection("todos");
          const insertedData = await todos.insertOne(data);
          res.status(200).json({ result: true, insertedData });
        } catch (err) {
          res.status(500).json({ result: false });
        } finally {
          client.close();
        }
      }
    });
  }
}

export default handler;
