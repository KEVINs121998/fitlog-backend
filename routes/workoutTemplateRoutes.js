const express = require('express');
const router = express.Router();
const {
  createTemplate,
  getTrainerTemplates,
  updateTemplate,
  deleteTemplate,
} = require('../controllers/workoutTemplateController');
const { protect, isTrainer } = require('../middleware/authMiddleware');

// All trainer routes are protected
router.post('/', protect, isTrainer, createTemplate);
router.get('/', protect, isTrainer, getTrainerTemplates);
router.put('/:id', protect, isTrainer, updateTemplate);
router.delete('/:id', protect, isTrainer, deleteTemplate);

module.exports = router;
