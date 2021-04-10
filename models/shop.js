const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MyObjectId = mongoose.Types.ObjectId

let shopSchema =  Schema({
    vendor: { type: MyObjectId, ref: 'vendor' },
    items : [{ type: MyObjectId, ref: 'products' 
    }]
})

const shop = mongoose.model('shop', shopSchema)

module.exports = shop