import mongoose from "mongoose";
const { Schema, model } = mongoose;

const TweetSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default model("tweet", TweetSchema);
