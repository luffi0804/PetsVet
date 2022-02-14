import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  email: String,
  pets: { type: mongoose.Schema.ObjectId, ref: "animals" },
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const user = mongoose.model("users", userSchema);
export default user;