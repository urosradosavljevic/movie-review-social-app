import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
  userId: String,
  reviewId: String,
  time: String,
  text: String,
});

export default mongoose.model("Comment", commentSchema);
