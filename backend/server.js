const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000
// const dotenv = require('dotenv')
// require('dotenv').config()




app.listen(PORT, ()=> console.log('listening to port', PORT))