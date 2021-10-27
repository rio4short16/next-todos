import dbConnect from "../../utils/dbConnect";
import Task from "../../models/Task";
dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const tasks = await Task.find();
        res.json({ success: true, tasks: tasks });
      } catch (err) {
        res.json({ result: false, msg: err });
      }
      break;
    case "POST":
      try {
        let newtask = Task(req.body);
        newtask.save((err) => {
          if (!err) res.json({ result: true });
          else res.json({ result: false });
        });
      } catch (err) {
        res.json({ result: false });
      }
      break;
    default:
      res.json({ result: false, msg: "Walang method" });
      break;
  }
};
