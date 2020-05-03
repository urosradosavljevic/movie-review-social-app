import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
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
