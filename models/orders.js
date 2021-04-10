const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MyObjectId = mongoose.Types.ObjectId

let orderSchema =  Schema({
    customer: { type: MyObjectId, ref: 'customer' },
    vendor: { type: MyObjectId, ref: 'vendor' },
    total_amount : Number,
    order_note : String,
    discount_voucher : String,
    order_status : String,
    date_ordered : Date,
    date_delivered : Date
})

const order = mongoose.model('order', orderSchema)

module.exports = order