const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')


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
        validate:{
            // This only works on CREATE or SAVE, important when updating users -- 
            validator: function(el){
                return el === this.password
            },
            message: 'Passwords do not match!'
        }
    }
})

userSchema.pre('save', async function(next){
    //this functions run only if the password was modified of freshly created
    if(!this.isModified('password')) return next();

    //encript the passwords, at the cpu cost of 12
    this.password = await bcrypt.hash(this.password, 12)

    //resets the passwordConfirm after validation
    this.passwordConfirm = undefined

    //move to the next middleware
    next();
})

const UserModel = mongoose.model('UserModel', userSchema)
module.exports = UserModel