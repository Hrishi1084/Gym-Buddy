const express = require('express')
const Workout= require('../models/workoutModel')
const{
    getWorkouts,
    getWorkout,
    createWorkout
}= require('../controllers/workoutController')

const router = express.Router()

router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', (req,res)=>{
    res.json({msg:'DELETE a workout.'})
})

router.patch('/:id', (req,res)=>{
    res.json({msg:'UPDATE a workout.'})
})

module.exports=router;