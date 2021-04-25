const express = require('express')
const market = require('../models/market.model')
const vendor = require('../models/vendor.model')
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
    try {
        const Market = await market.findById(req.params.id)
        const VendorIDs = Market.vendorIds
        let VendorInfo = []
        for(let i = 0; i < VendorIDs.length; i++){
            const Vendor = await vendor.findById(VendorIDs[i])
            console.log(Vendor)
            VendorInfo[i] = Vendor
        }
        res.status(200).json({vendor: VendorInfo})
    }catch(err){
        return res.status(404).json({message: "Sorry system is busy", err})
    }
})

router.post('/add', upload.single('image'), (req,res) =>{
    const name = req.body.name
    const description = req.body.description

    const newMarket = new market({name, image:req.file.path, description: description})
    newMarket.save().then(() => res.json('Market added!')).catch(err => res.status(400).json('Error'+err))
})


module.exports = router
