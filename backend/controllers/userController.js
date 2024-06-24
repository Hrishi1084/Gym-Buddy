const User = require('../models/userModel')

const loginUser = async (req, res) => {
    res.json({ mssg: 'Login' })
}

const signupUser = async (req, res) => {
    res.json({ mssg: 'Signup' })
}

module.exports = { loginUser, signupUser }