const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  foodItems: [
    {
      name: String,
      calories: Number,
      protein: Number,
      carbs: Number,
      fats: Number,
    },
  ],
  timeOfDay: { type: String, enum: ["Breakfast", "Lunch", "Dinner", "Snack"] },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Meal", mealSchema);
