const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const shoppingCartSchema = new Schema({
    products: {
        type: Array,
        default: []
    },
    total_price: {type: Number, default :0},
    vendor_name: {type: String, default: ""},
    vendor_id : {type: String, default: ""},
    delivery_charges: {type: String, default:""},

})

const shoppingCart = mongoose.model('shoppingCart', shoppingCartSchema)

module.exports = shoppingCart;
