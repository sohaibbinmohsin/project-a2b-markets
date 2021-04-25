const express = require('express')
const cors = require('cors')
const path = require('path')

const port = process.env.PORT || 8080
const mongoose = require('mongoose')
require('dotenv').config();

const uri = process.env.ATLAS_URI || "mongodb+srv://sohaibbinmohsin:hello1234@cluster0.xqb6t.mongodb.net/a2b-markets?retryWrites=true&w=majority"
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
const adminRouter = require('./routes/admin.js')
const passwordUpdateRouter = require('./routes/passwordUpdate')
const vendorRouter = require('./routes/vendor')
const location = require('./routes/location.js')
const reverse_geocode = require('./routes/reverse_geocode.js')
const order = require('./routes/order.js')

app.use('/api/markets',marketsRouter)
app.use('/api/contactUs', contactUsRouter)
app.use('/api/customer', customerRouter)
app.use('/api/user', passwordUpdateRouter)
app.use('/api/vendor', vendorRouter)
app.use('/api/location',location)
app.use('/api/reverse_geocode',reverse_geocode)
app.use('/api/order', order)
app.use('/api/admin', adminRouter)

if (process.env.NODE_ENV === 'production') {
  console.log(`in production`)
  app.use(express.static('front-react/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'front-react', 'build', 'index.html'));
  });
}

app.listen(port, ()=>{console.log(`server listenting on PORT:${port}`)})