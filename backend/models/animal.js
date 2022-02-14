import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
  name: String,
  age: Number,
  race: String,
  weight: Number,
  height: Number,
  health: String,
  owner: { type: mongoose.Schema.ObjectId, ref: "users" },
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean
});

const animal = mongoose.model("animals", animalSchema);
export default animal;
