import { Schema } from "mongoose";

export default new Schema({
  name: String,
  authors: [
    {
      created: { type: Date, default: Date.now },
      author: { type: String, ref: "User" },
    },
  ],
});
