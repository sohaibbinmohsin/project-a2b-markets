const express = require("express")
router = express.Router()
const order = require("../controllers/order.js")

router.post('/addnew',order.addnew)
router.get('/venderId/:id',order.getByvendorId)
router.get('/customerID/:id',order.getByCustomerId)

module.exports = router