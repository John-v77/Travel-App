const express = require('express');
const router = express.Router();
const Destinations = require('../model/tripModel')



// Add an item to the data base
router.post(`/addDestination`, async (req, res, next) => { 
    try{
        // console.log('you made it to the backend', req.body)
        let newDestination = await Destinations.create(req.body)
        res.status(200).json({
            status:'success',
            data:{destination: newDestination}
        })
    }catch(err){
        res.status(400).json({
            status:'failed',
            message:err
        })
    }
})

// Find all the records in the database and send it to the frontend
router.get('/AllDestinations', async (req, res, next) => {
    try{
        let allDestinations = await Destinations.find({})
        res.status(200).json({
            status:'success',
            results: Destinations.length,
            data:{allDestinations : allDestinations}
        })
    } catch(err){
        res.status(404).json({
            status:'failed',
            message:err
        })
    }
})




module.exports = router