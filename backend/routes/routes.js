const express = require('express');
const router = express.Router();
const Destinations = require('../model/tripModel')

router.post(`/addDestination`, async (req, res, next) => { 
    
    console.log('you made it to the backend', req.body)
    let newDestination = await Destinations.create(req.body)
    
    res.status(200).json(newDestination)
})


module.exports = router