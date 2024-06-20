const Workout= require('../models/workoutModel')

const getWorkouts= async (req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

const createWorkout = async (req,res)=>{
    try {
        const workout = await Workout.create({title,reps,load})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports= {
    createWorkout,
    getWorkouts
}