const express = require('express');

const authController = require('./../controllers/authController')
const UserModel = require('./../model/userModel')

const router = express.Router();
const getAllUsers = require('./../controllers/userController')


// Add an user to the data base
router.post('/signup', authController.signup)

// Find all the users in the database and send it to the frontend
router
    .route('/')
    .get(getAllUsers)

router
    .route('/:id')
    .get(getUser)

module.exports = router;