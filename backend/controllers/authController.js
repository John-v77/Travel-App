const UserModel = require('./../model/userModel')
const jwt = require('jsonwebtoken')

const signToken = (id) => {
    return jwt.sign({id:id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}


exports.signup = async(req, res, next) => {
    try{
        const newUser = await UserModel.create({
           name = req.body.name,
           email = req.body.email,
           password = req.body.password,
           passwordConfirm = req.body.passwordConfirmq
        });

        const token = signToken(newUser._id)

        res.status(201).json({
            status: 'success',
            token,
            data:{user : newUser}
        })
    }catch(err){
        res.status(400).json({
            status:'failed',
            message:err
        })
    }
}

exports.login = async (req, res, next) => {
    try{
        const {email, password} = req.body

        // 1) Check if email and password exist
        if(!email || !password){
            return next(//check you to make this middleware on tutorial: new AppError('Please provide email and password!', 400))
                )
        }
        // 2) Check if users exists && password is correct
        const user = await UserModel.findOne({email}).select('+password')


        if(!user || !(await user.correctPassword(password, user.password))){  
                                //correctPassword defined in line 64 -auth.controller.js
            return next(new AppError('incorrect email or password', 401))
        }

        // 3) If everything ok, send token to client
        const token = signToken(user._id)
        res.status(200).json({
            status:'success',
            token
        })
    }catch(err){
        res.status(400).json({
            status:'failed',
            message:err
        })
    }
}