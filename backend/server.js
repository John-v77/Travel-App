const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

const dotenv = require('dotenv')
require('dotenv').config()

mongoose
    .connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology:true})
    .then((x) => console.log(`Connected to Mongo! Database name "${x.connections[0].name}"`))
    .catch((err) =>  console.log('Error connecting to mongo', err))

app.get('/', (req, res) => {
    console.log('you made it to the backend')
})

app.listen(PORT, ()=> console.log('listening to port', PORT))