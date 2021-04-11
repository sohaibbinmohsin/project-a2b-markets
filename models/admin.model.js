const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adminSchema = new Schema({
    name: {type: String, required: true},
    email_address: {type: String, required: true},
    phoneno: {type: Number, required: true},
    password: {type: String, required: true},
    isVerified: {type: Boolean}
})

const admin = mongoose.model('admin', adminSchema)

module.exports = admin