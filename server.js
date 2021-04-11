const express = require('express')
const cors = require('cors')
const port = process.env.port || 8000
const mongoose = require('mongoose')
require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify:false, useUnifiedTopology: true})
const connection = mongoose.connection

connection.once('open', ()=>{
    console.log("MONGODB CONNECTION SUCCESSFUL")
})
const app = express();
app.use('/uploads', express.static('uploads'))
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const marketsRouter = require('./routes/markets')
const contactUsRouter = require('./routes/contactUs')
const customerRouter = require('./routes/customer')
const passwordUpdateRouter = require('./routes/passwordUpdate')
const vendorRouter = require('./routes/vendor')
const location = require('./routes/location.js')
const reverse_geocode = require('./routes/reverse_geocode.js')
const order = require('./routes/order.js')

app.use('/markets',marketsRouter)
app.use('/contactUs', contactUsRouter)
app.use('/customer', customerRouter)
app.use('/user', passwordUpdateRouter)
app.use('/vendor', vendorRouter)
app.use('/location',location)
app.use('/reverse_geocode',reverse_geocode)
app.use('/order',order)

app.listen(port, ()=>{console.log("Server is running")})