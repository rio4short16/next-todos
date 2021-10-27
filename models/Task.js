import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title!"],
      unique: true,
      trim: true,
      maxlength: [50, "Title cannot be more than 50 characters!"],
    },
    desc: {
      type: String,
      required: [true, "Please add a title!"],
      maxlength: [255, "Title cannot be more than 255 characters!"],
    },
    date: [String],
    createdby: [String],
  },
  { strict: false, timestamps: true }
);

module.exports = mongoose.models.todos || mongoose.model("todos", TodoSchema);
