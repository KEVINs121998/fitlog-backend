const WorkoutTemplate = require('../models/WorkoutTemplate');

exports.createTemplate = async (req, res) => {
  try {
    const { title, exercises } = req.body;

    const newTemplate = new WorkoutTemplate({
      trainer: req.user._id,
      title,
      exercises,
    });

    await newTemplate.save();
    res.status(201).json(newTemplate);
  } catch (err) {
    res.status(500).json({ message: 'Error creating template', error: err.message });
  }
};

exports.getTrainerTemplates = async (req, res) => {
  try {
    const templates = await WorkoutTemplate.find({ trainer: req.user._id });
    res.json(templates);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching templates' });
  }
};

exports.updateTemplate = async (req, res) => {
  try {
    const { title, exercises } = req.body;

    const template = await WorkoutTemplate.findOneAndUpdate(
      { _id: req.params.id, trainer: req.user._id },
      { title, exercises },
      { new: true }
    );

    if (!template) return res.status(404).json({ message: 'Template not found' });

    res.json(template);
  } catch (err) {
    res.status(500).json({ message: 'Error updating template' });
  }
};

exports.deleteTemplate = async (req, res) => {
  try {
    const result = await WorkoutTemplate.findOneAndDelete({
      _id: req.params.id,
      trainer: req.user._id,
    });

    if (!result) return res.status(404).json({ message: 'Template not found' });

    res.json({ message: 'Template deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting template' });
  }
};
