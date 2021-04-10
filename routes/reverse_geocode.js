const express = require("express")
router = express.Router()
location = require("../controllers/location.js")

router.post('/',location.reverse_geocode)

module.exports = router