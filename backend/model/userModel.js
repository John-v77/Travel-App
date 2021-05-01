const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Please provide your first name']
        },
    email:{
        type: String,
        required:[true, 'Please provide your email address'],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail, 'Please provide a valid email']
    },
    photo:String,
    password:{
        type:String,
        required: [true, 'Please provide a password'],
        minlength: 10
    },

    passwordConfirm:{
        type:String,
        required:[true, 'Please confirm your password'],
    }
})

const UserModel = mongoose.model('UserModel', userSchema)
module.exports = UserModel