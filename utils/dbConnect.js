var mongoose = require("mongoose");
const connection = {};

async function dbConnect() {
  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default dbConnect;
