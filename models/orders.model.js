const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MyObjectId = mongoose.Types.ObjectId

let orderSchema =  Schema({
    customer: { type: MyObjectId, ref: 'customer' },
    vendor: { type: MyObjectId, ref: 'vendor' },
    vendor_name : {type: String},
    products: {
        type: Array,
        default: []
    },
    total_amount : Number,
    order_note : {type: String, default: ""},
    discount_voucher : {type: String, default : ""},
    delivery_charges : {type: String, },
    date_ordered : Date,
    date_delivered : Date,
    isConfirmed : Boolean,
})

const order = mongoose.model('order', orderSchema)

module.exports = order
