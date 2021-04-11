const { Binary, ObjectId } = require('bson')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const vendorSchema = new Schema({
    name: {type: String, required: true},
    shop_name: {type: String, required: true},
    shop_address: {type: String, required: true},
    email_address: {type: String, required: true},
    phoneno: {type: Number, required: true},
    category_name: {type: Array, required: true},
    logo: {type: String},
    password: {type: String, required: true},
    isVerified: {type: Boolean},
    emailToken: {type: String},
    delivery_time: {type: String},
    delivery_charges: {type: String},
    timing: {type: String},
    products: {
        type: Array},
    shop_status: {type: Boolean, required: true}
})

const vendor = mongoose.model('vendor', vendorSchema)

module.exports = vendor

// {
//     // _id: {type: mongoose.Types.ObjectId},
//     name: {type: String, required: true},
//     product_image: {type: String, required: true},
//     vendor_discount: {type: Number},
//     description: {type: String},
//     price: {type: Number, required: true},
//     section_name: {type: String, required: true},
//     item_available: {type: Boolean, required: true}
// }