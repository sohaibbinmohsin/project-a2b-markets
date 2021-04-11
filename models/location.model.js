const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MyObjectId = mongoose.Types.ObjectId

let locationSchema =  Schema({
    customer: { type: MyObjectId, ref: 'customer' },
    currLocation : {
        address : String,
        latitude : Number,
        longitude : Number
    }
})

const location = mongoose.model('location', locationSchema)

module.exports = location