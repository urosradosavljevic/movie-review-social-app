import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
  createdAt: String,
  title: String,
  review: String,
  director: String,
  rate: String,
  img: String,
  userId: String,
  likes: Array,
  comments: Array,
});

export default mongoose.model("MovieReview", reviewSchema);
