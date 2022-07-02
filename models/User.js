import pkg from "mongoose";
const { Schema, model } = pkg;

const UserSchema = new Schema(
  {
    handle: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default model("User", UserSchema);
