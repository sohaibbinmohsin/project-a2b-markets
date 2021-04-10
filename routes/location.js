const express = require("express")
const router = express.Router()
const location = require("../controllers/location.js")

router.post('/set',location.setLoc)
router.get('/:id',location.getLoc)

module.exports = router