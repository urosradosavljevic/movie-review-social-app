import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: String,
  password: String,
  name: String,
  token: String,
  following: Array,
});

export default mongoose.model("User", userSchema);
