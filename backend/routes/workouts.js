const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getWorkout

} = require('../controllers/workoutController')

const router = express.Router();

//GET request
router.get('/', getWorkouts)

//Single GET request
router.get('/:id', getWorkout)

//POST request
router.post('/', createWorkout)

//DELETE request
router.delete('/:id', (req,res) =>{
    res.json({msg : "This is a DELETE request"});
    
})

//UPDATE request
router.patch('/:id', (req,res) =>{
   res.json({msg : "This is a UPDATE request"});
    
})

module.exports = router;