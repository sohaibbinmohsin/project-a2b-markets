const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const customerSchema = new Schema({
    name: {type: String, required: true},
    email_address: {type: String, required: true},
    address: {type: String},
    phoneno: {type: String, required: true},
    password: {type: String, required: true},
    isVerified: {type: Boolean},
    emailToken: {type: String},
    passwordToken: {type: String}
})

const customer = mongoose.model('customer', customerSchema)

module.exports = customer;