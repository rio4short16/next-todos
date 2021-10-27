// /api/new-todo
// POST /api/new-todo

import { MongoClient } from 'mongodb'

async function handler(req, res) {
	if (req.method === 'POST') {
		const data = req.body

		const client = await MongoClient.connect('path')

		// Get All Database
		const db = client.db()

		const todoCollection = db.collection('databasename')
		const result = todoCollection.insertOne(data)

		console.log(result)

		client.close()

	}
}

export default handler