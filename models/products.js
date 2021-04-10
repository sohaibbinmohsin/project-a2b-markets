const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MyObjectId = mongoose.Types.ObjectId

let productsSchema =  Schema({
    shop: { type: MyObjectId, ref: 'shop' },
    market: { type: MyObjectId, ref: 'market' },
    vendor_discount : Number,
    name : String,
    image : {
        data: Buffer,
        contentType: String
    },
    price : Number,
    available : Boolean,
    quantity : Number,
    expiry : Date
})

const products = mongoose.model('products', productsSchema)

module.exports = products