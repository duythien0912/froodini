import mongoose from "mongoose";

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: String,
  image: String,
  description: String,
  participants: Array,
  sortingscore: String,
  type: { type: String, default: "food" },
  active:Boolean
});

export default mongoose.model("food", foodSchema);
