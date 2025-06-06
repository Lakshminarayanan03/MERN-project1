const express = require('express');
const Workout = require('../models/workoutmodel')
const router = express.Router();

//GET request
router.get('/', (req,res) =>{
    res.json({msg : "This is a GET request"});
    
})

//Single GET request
router.get('/:id', (req,res) =>{
    res.json({msg : "This is a Single GET request"});
    
})

//POST request
router.post('/', async (req,res) =>{
    const {title, reps, loads} = req.body;
    try{
       const workout = await Workout.create({title, reps, loads})
        res.status(200).json(workout)

    }catch(error){
        res.status(400).json({error: error.message})
    }
   
    
})

//DELETE request
router.delete('/:id', (req,res) =>{
    res.json({msg : "This is a DELETE request"});
    
})

//UPDATE request
router.patch('/:id', (req,res) =>{
   res.json({msg : "This is a UPDATE request"});
    
})

module.exports = router;