const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const marketSchema = new Schema({
    name: {type: String, required: true, unique: true},
    image: {type: String, required: true},
    vendorIds: {type: Array}
})

const Market = mongoose.model('Market', marketSchema)

module.exports = Market;