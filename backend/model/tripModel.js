const mongoose = require('mongoose')

const destinations = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Destinations', destinations)