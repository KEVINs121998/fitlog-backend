const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  caloriesBurned: { type: Number },
  notes: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Workout", workoutSchema);
