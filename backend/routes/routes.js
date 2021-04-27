const express = require('express');
const router = express.Router();


router.post(`/addDestination`, (req, res, next) => { 
    
    console.log('you made it to the backend', req.body)
    let newDestination = req.body

    res.status(200).json(newDestination)
})


module.exports = router