const express = require("express")
const router = express.Router()
const shop = require("../controllers/shop.js")

// get all the shops in a market
router.get('/:id',shop.allshops)
// get a shop by id
router.get('/shop/:id',shop.shopbyid)
// adds new shop
router.post('/addnew',shop.addnew)
// get a product by id 
// router.get('/product/:id',shop.newproduct)
// // updates a product in 

module.exports = router