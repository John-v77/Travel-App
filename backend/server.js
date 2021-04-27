const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000
const MONGODB_URL = process.env.MONGODB_URL

const dotenv = require('dotenv')
require('dotenv').config()

const cors = require('cors')
app.use(
    cors({credentials:true, 
          origin:["http://localhost:5000"]
        })
)

app.use('/api', require('./routes   '))

const Destinations = require('./model/tripModel')
const mongoose = require('mongoose')
mongoose
    .connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology:true})
    .then((x) => console.log(`Connected to Mongo! Database name "${x.connections[0].name}"`))
    .catch((err) =>  console.log('Error connecting to mongo', err))




// app.get('/', (req, res) => {
//     console.log('you made it to the backend')
// })

app.listen(PORT, ()=> console.log('listening to port', PORT))