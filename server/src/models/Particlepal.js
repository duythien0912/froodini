import mongoose from "mongoose";

const Schema = mongoose.Schema;

const particlepalSchema = new Schema({
    fristname:String,
    lastname:String,
    email:String,
    avatarurl:String
});

export default mongoose.model("particlepal", particlepalSchema);