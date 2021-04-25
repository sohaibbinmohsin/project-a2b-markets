const express = require("express")
router = express.Router()
const order = require("../controllers/order.js")
let auth = require('../middleware/auth')

router.post('/addnew',auth, order.addnew)
router.post('/confirmOrder/:orderid',auth, order.confirmOrder)
router.get('/vendorId',auth, order.getByvendorId)
router.get('/customerID/:id',auth,order.getByCustomerId)

module.exports = router
