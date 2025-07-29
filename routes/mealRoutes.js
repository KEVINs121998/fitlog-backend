const express = require('express');
const { createMeal, getMeal ,updateMeal,deleteMeal} = require('../controllers/mealController');
const { protect } = require('../middelwares/authMiddleware');

const router = express.Router();

router.post('/', protect, createMeal);
router.get('/', protect, getMeal);
router.put('/:id', protect, updateMeal);
router.delete('/:id', protect, deleteMeal);


module.exports = router;
