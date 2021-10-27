import dbConnect from "../../utils/dbConnect";
import Task from "../../models/Task";
dbConnect();

export default async (req, res) => {
  if (req.query != null && req.query != "") {
    let deleteID = req.query.id;
    await Task.remove({ _id: deleteID });
    res.json({ result: true });
  }
};
