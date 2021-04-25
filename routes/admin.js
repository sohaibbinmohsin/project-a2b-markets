require('dotenv').config()
const express = require('express')
const bcrypt = require('bcryptjs')
const admin = require('../models/admin.model')
const order = require('../models/orders.model')
const vendor = require('../models/vendor.model')
const market = require('../models/market.model')
const multer = require('multer')
const auth = require('../middleware/auth')

const router = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'front-react/public/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname)
    }
})

router.post('/signup', async (req,res) =>{
    // console.log(req.file)
    const{name, email_address, phoneno, password} = req.body
    const hashedpassword = await bcrypt.hash(password,12)
    try {
        const newAdmin = new admin({name, email_address, phoneno, password: hashedpassword, isVerified:true})
        newAdmin.save()
        res.status(200).json({message: "profile created"})
    }catch(err){
        res.status(404).json({message: "something went wrong", error: err})
    }
    
})

const upload = multer({storage: storage, limits: {
    fileSize: 1024 * 1024 *10
}})

router.get('/profile', auth, async(req, res) => {
    try {
        const Admin = await admin.findById({_id: req.userID})
        res.status(200).json({profile: Admin})
    }catch(err){
        res.status(404).json({message: "Something went wrong."})
    }
})

router.get('/viewvendorreq', auth, async(req, res) => {
    try {
        const Vendors = await vendor.find({approved: false})
        res.status(200).json({requests: Vendors})
    }catch(err){
        res.status(404).json({message: "Something went wrong."})
    }
})

router.put('/approvevendor', auth, async(req, res) => {
    const {_id} = req.body
    try {
        const Vendor = await vendor.findById({_id})
        Vendor.approved = true
        Vendor.save()
        res.status(200).json({result: 'vendor approved'})
    }catch(err){
        res.status(404).json({message: "Something went wrong."})
    }
})

router.get('/ordersconfirmed', auth, async(req, res) => {
    try {
        const Orders = await order.find({isConfirmed: true})
        res.status(200).json({orders: Orders})
    }catch(err){
        res.status(404).json({message: "Something went wrong."})
    }
})

router.get('/ordersnotconfirmed', auth, async(req, res) => {
    try {
        const Orders = await order.find({isConfirmed: false})
        res.status(200).json({orders: Orders})
    }catch(err){
        res.status(404).json({message: "Something went wrong."})
    }
})

router.post('/addcategory', upload.single('image'), auth, async(req, res) => {
    const {name, description} = req.body
    try {
        const Market = new market({name: name, image: req.file.path, description: description, vendorIds: []})
        res.status(200).json({message: "New market added successfully!", market: Market})
    }catch(err){
        res.status(404).json({message: "Something went wrong."})
    }
})

module.exports = router