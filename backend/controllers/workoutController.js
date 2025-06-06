const Workout = require('../models/workoutmodel')
const mongoose = require ('mongoose')


//get all workouts
const getWorkouts = async (req,res) =>{
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts);
}

//get single workout
const getWorkout = async (req,res) =>{
    const {id}= req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No such workout"})
    }
    const workout = await Workout.findById(id);
    
    res.status(200).json(workout);
}

//create a workout
const createWorkout = async (req,res) =>{
     const {title, reps, loads} = req.body;
    try{
       const workout = await Workout.create({title, reps, loads})
        res.status(200).json(workout)

    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a workout

//update a workout


module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout
}