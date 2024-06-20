const express = require('express')
const Workout= require('../models/workoutModel')
const{
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout
}= require('../controllers/workoutController')

const router = express.Router()

router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', (req,res)=>{
    res.json({msg:'UPDATE a workout.'})
})

module.exports=router;