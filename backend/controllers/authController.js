const UserModel = require('./../model/userModel')

exports.signup = async(req, res, next) => {
    try{
        const newUser = await UserModel.create(req.body);

        res.status(201).json({
            status: 'success',
            data:{user : newUser}
        })
    }catch(err){
        res.status(400).json({
            status:'failed',
            message:err
        })
    }
}