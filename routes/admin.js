require('dotenv').config()
const express = require('express')
const admin = require('../models/admin.model')
const order = require('../models/orders.model')
const vendor = require('../models/vendor.model')
const multer = require('multer')
const auth = require('../middleware/auth')

const router = express.Router()

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
    try {
        const Vendor = await vendor.findById({_id: req.userID})
        Vendor.approved = true
        Vendor.save()
        res.status(200).json({result: 'vendor approved'})
    }catch(err){
        res.status(404).json({message: "Something went wrong."})
    }
})

router.get('/ordersconfirmed', auth, async(req, res) => {
    try {
        const Orders = await order.find({isconfirmed: true})
        res.status(200).json({orders: Orders})
    }catch(err){
        res.status(404).json({message: "Something went wrong."})
    }
})

router.get('/ordersnotconfirmed', auth, async(req, res) => {
    try {
        const Orders = await order.find({isconfirmed: false})
        res.status(200).json({orders: Orders})
    }catch(err){
        res.status(404).json({message: "Something went wrong."})
    }
})

module.exports = router