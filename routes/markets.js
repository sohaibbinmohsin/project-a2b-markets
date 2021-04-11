const express = require('express')
let market = require('../models/market.model')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname)
    }
})

const upload = multer({storage: storage, limits: {
    fileSize: 1024 * 1024 *10
}})

const router = express.Router()

router.get('/', async (req,res)=>{
    market.find()
    .then(markets => res.json(markets))
    .catch(err => res.status(400).json('Error' + err))
})

router.get('/:id', async (req,res)=>{
    market.findById(req.params.id)
    .then(market => res.json(market))
    .catch(err => res.status(400).json('Error' + err))
})

router.post('/add', upload.single('image'), (req,res) =>{
    const name = req.body.name

    const newMarket = new market({name, image:req.file.path})
    newMarket.save().then(() => res.json('Market added!')).catch(err => res.status(400).json('Error'+err))
})


module.exports = router
