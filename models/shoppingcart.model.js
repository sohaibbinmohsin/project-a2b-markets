const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const shoppingCartSchema = new Schema({
    products: [{
        type: Schema.ObjectId,
        ref: 'product',
        default: []
    }]
})

const shoppingCart = mongoose.model('shoppingCart', shoppingCartSchema)

module.exports = shoppingCart;