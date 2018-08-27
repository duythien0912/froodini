import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  nameCategory: String,
  data: [
    {
      _idDish: Schema.Types.ObjectId,
      namedish: { type: String },
      content: String,
      urlimg: String,
      timeborn: { type: String, default: Date.now },
      color: { type: String, default: "#ACC95B" }
    }
  ]
});

export default mongoose.model("category", categorySchema);
