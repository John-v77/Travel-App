const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000


const dotenv = require('dotenv')
require('dotenv').config()
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/localIronPlate`

// const cors = require('cors')
// app.use(
//     cors({credentials:true, 
//           origin:["http://localhost:5000"]
//         })
// )

app.use('/api', require('./routes/routes'))
const Destinations = require('./model/tripModel')
const mongoose = require('mongoose')
mongoose
    .connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology:true})
    .then((x) => console.log(`Connected to Mongo! Database name "${x.connections[0].name}"`))
    .catch((err) =>  console.log('Error connecting to mongo', err))


app.listen(PORT, ()=> console.log('listening to port', PORT))