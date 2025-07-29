const Meal = require('../models/Meal');

exports.createMeal = async (req,res) => {
    try{
        const meal = await Meal.create({...req.body, user:req.user._id})
        res.status(201).json(meal)
    } catch(err){
res.status(500).json({message:"Failed to create meals"})
    }
}

exports.getMeal = async (req,res) => {
    try {
        const meals = await Meal.find({ user:req.user._id})
        res.status(201).json(meals)
    } catch (err) {
        res.status(500).json({message:"Failed to get meals"})
    }
}

exports.updateMeal = async (req,res) => {
    try {
        const meal = await Meal.findOneAndUpdate({ _id:req.params.id ,user:req.user._id},req.body,{new:true})
        if(!meal) res.status(404).json({message:"Meal not found"})
        res.status(201).json(meal)
    } catch (err) {
        res.status(500).json({message:"Failed to update meals"})
    }
}

exports.deleteMeal = async (req,res) => {
    try {
        const meal = await Meal.findOneAndDelete({ _id:req.params.id ,user:req.user._id})
        if(!meal) res.status(404).json({message:"Meal not found"})
        res.status(201).json({message:'Meal Deleted'})
    } catch (err) {
        res.status(500).json({message:"Failed to delete meal"})
    }
}