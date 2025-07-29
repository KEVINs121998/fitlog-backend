const express = require('express');
const { createWorkout, getWorkouts,updateWorkout,deleteWorkout } = require('../controllers/workoutController');
const { protect } = require('../middelwares/authMiddleware');

const router = express.Router();

router.post('/', protect, createWorkout);
router.get('/', protect, getWorkouts);
router.put('/:id', protect, updateWorkout);
router.delete('/:id', protect, deleteWorkout);

module.exports = router;
