const UserModel = require('./../model/userModel')

exports.getAllUsers = async (req, res, next) => {
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
}

exports.getUser = async (req, res, next) => {
    try{
        const user = await UserModel.findById(req.params.id)
        res.status(200).json({
            status:'success',
            data:{user : user}
        })
    }catch(err){
        res.status(400).json({
            status:'failed',
            message:err
        })
    }
}