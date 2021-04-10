const { config } = require('dotenv')
const express = require('express')
const location = require('./routes/location.js')
const reverse_geocode = require('./routes/reverse_geocode.js')
const order = require('./routes/order.js')
const shop = require('./routes/shop.js')
const cors = require("cors")
const mongoose = require('mongoose');

app = express()
config()

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use('/location',location)
app.use('/reverse_geocode',reverse_geocode)
app.use('/order',order)
app.use('/shop',shop)


const PORT = process.env.PORT || 3000
const URI = process.env.URI

mongoose.connect(URI, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify:false, useUnifiedTopology: true })
const connection = mongoose.connection

connection.once('open', ()=>{
    console.log("Mongoose Connected")
})

app.listen(PORT,()=>{
    console.log(`Server Started on PORT: ${PORT}`)
})