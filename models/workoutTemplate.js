const mongoose = require('mongoose');

const workoutTemplateSchema = new mongoose.Schema({
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  exercises: [
    {
      name: { type: String, required: true },
      reps: { type: String }, // e.g. "3x10", or "12-15"
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('WorkoutTemplate', workoutTemplateSchema);
