const Workout = require("../models/Workout");

exports.createWorkout = async (req, res) => {
  try {
    const workout = await Workout.create({ ...req.body, user: req.user._id });
    res.status(201).json(workout);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create workout' });
  }
};

exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user._id });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: "Failed to get workouts" });
  }
};

exports.updateWorkout = async (req,res) => {
     try {
    const workout = await Workout.findOneAndUpdate({ _id:req.params.id,user: req.user._id },req.body,{new:true});
    if(!workout) return res.status(404),json({message:'Workout not found'})
    res.json(workout);
  } catch (err) {
    res.status(500).json({ message: "Failed to update workout" });
  }
}

exports.deleteWorkout = async (req,res) => {
     try {
    const deleted = await Workout.findOneAndDelete({ _id:req.params.id,user: req.user._id });
    if(!deleted) return res.status(404),json({message:'Workout not found'})
    res.json({message:'Workout deleted'});
  } catch (err) {
    res.status(500).json({ message: "Failed to update workout" });
  }
}