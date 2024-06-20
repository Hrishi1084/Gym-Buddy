const express = require('express')
const Workout= require('../models/workoutModel')
const{
    createWorkout
}= require('../controllers/workoutController')

const router = express.Router()

router.get('/', (req,res)=>{
    res.json({msg:'GET all workouts'})
})

router.get('/:id', (req,res)=>{
    res.json({msg:'GET a single workout.'})
})

router.post('/', createWorkout)

router.delete('/:id', (req,res)=>{
    res.json({msg:'DELETE a workout.'})
})

router.patch('/:id', (req,res)=>{
    res.json({msg:'UPDATE a workout.'})
})

module.exports=router;