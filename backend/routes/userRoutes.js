const express = require('express');

const authController = require('./../controllers/authController')
const UserModel = require('./../model/userModel')

const router = express.Router();

// Add an user to the data base
router.post('/signup', authController.signup)

// Find all the records in the database and send it to the frontend
router.get('/AllUsers', async (req, res, next) => {
    try{
        let allUsers = await UserModel.find({})
        res.status(200).json({
            status:'success',
            results: UserModel.length,
            data:{allUsers : allUsers}
        })
    } catch(err){
        res.status(404).json({
            status:'failed',
            message:err
        })
    }
})