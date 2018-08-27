import mongoose from "mongoose";

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  buttontext: String,
  picture: String,
  header: String,
  description: String,
  price: String,
  showitemprice: Boolean,
  sortingscore:String,
  link: { type: String, default: "abc" }
});

export default mongoose.model("item", itemSchema);
