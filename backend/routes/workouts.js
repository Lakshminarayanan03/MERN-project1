const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout

} = require('../controllers/workoutController')

const router = express.Router();

//GET request
router.get('/', getWorkouts)

//Single GET request
router.get('/:id', getWorkout)

//POST request
router.post('/', createWorkout)

//DELETE request
router.delete('/:id', deleteWorkout)

//UPDATE request
router.patch('/:id', updateWorkout)

module.exports = router;