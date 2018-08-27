import mongoose from "mongoose";

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String },
  description: { type: String },
  name: { type: String, required: true },
  date: { type: String, required: true },
  place: { type: String, required: true },
  time: { type: String, required: true },
  user: { type: String },
  category: { type: String },
  imageurl: { type: String },
  thumbnailurl: { type: String },
  created_at: { type: Date, default: Date.now },
  linkevent: { type: String, default: "" },
  color: { type: String, default: "#ACC95B" },
  active: { type: Boolean, default: true },
  guest: [{}]
});

export default mongoose.model("event", eventSchema);
