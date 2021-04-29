const express = require('express');
const router = express.Router();
const Destinations = require('../model/tripModel')


// Add an item to the data base
router.post(`/addDestination`, async (req, res, next) => { 
    
    console.log('you made it to the backend', req.body)
    let newDestination = await Destinations.create(req.body)
    
    res.status(200).json(newDestination)
})

// Find all the records in the database and send it to the frontend
router.get('/AllDestinations', async (req, res, next) => {
    let allDestinations = await Destinations.find({})
    res.status(200).json(allDestinations)
})




module.exports = router