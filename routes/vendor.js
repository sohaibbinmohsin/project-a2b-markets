require('dotenv').config()
const express = require('express')
const bcrypt = require('bcryptjs') 
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
const vendor =  require('../models/vendor.model')
const market =  require('../models/market.model')
const { ObjectId } = require('bson')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getDate() + file.originalname)
    }
})

// const fileFilter = (req, file, cb) => {
//     //reject a file
//     if(file.minetype === 'image/jpeg' || file.minetypeconst description = req.body.description === 'image/png'){
//         cb(null, true)
//     }else {
//         cb(null, false)
//     }
// }

const upload = multer({storage: storage, limits: {
    fileSize: 1024 * 1024 *10
}})
// fileFilter: fileFilter
// const upload = multer({dest: 'uploads'})

const router = express.Router()

router.get('/', async (req,res)=>{
    vendor.find()
    .then(vendor => res.json(vendor))
    .catch(err => res.status(400).json('Error' + err))
})
// upload.single('image'),

router.post('/signup', upload.single('image'),async (req,res) =>{
    // console.log(req.file)
    const{shop_name, name, shop_address, email_address, category_name, phoneno, password, confirmPassword} = req.body
        const existingVendor =  await vendor.findOne({email_address})
        if(existingVendor && existingVendor.isVerified == true){
            return res.status(404).json({message: "Email already exists"})
        }
        if(existingVendor && existingVendor.isVerified == false){
            return res.status(404).json({message: "This email is already registered. Please verify your account."})
        }
        const existingShop = await vendor.findOne({shop_address})
        if(existingShop){
            return res.status(404).json({message: "Shop with same address already exist"})
        }
        if(confirmPassword!=password){
            return res.status(404).json({message: "Passwords do not match"})
        }
        let emailToken = crypto.randomBytes(64).toString('hex')
        let isVerified = false
        let approved = false
        let products = []
        let shop_status = false
        const hashedpassword = await bcrypt.hash(password,12)
        // logo: req.file.path,
        const newVendor = new vendor({name, shop_name, shop_address, email_address, category_name, logo: req.file.path, phoneno, password: hashedpassword, isVerified, emailToken, products, shop_status, approved})
        newVendor.save().then().catch(err => console.log(err))
        // for(let i=0; i < category_name.length; i++)
        // {
        //     console.log(category_name[i])
            
        // }
        // const Market = await market.findOne({name: category_name})
        // Market.vendorIds.push(newVendor._id)
        // Market.save().then().catch(err => console.log(err))
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'dummy.A2B@gmail.com',
              pass: 'hello@1234_'
            }
          })
        let mailOptions = {
            from: 'dummmy.A2B@gmail.com',
            to: newVendor.email_address,
            subject: 'A2B Markets - Verify email',
            text: `Thank you for registering on our website. Please copy and paste this code to verify your account. ${newVendor.emailToken}`
        }
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return res.status(404).json({message: "Sorry system is busy"})
            } else {
                res.status(200).json({message: "Thank you for registering. Please check your email to verify your account."})
            }
          })
})

router.post('/verify-email', async(req,res)=>{
    try{
        let etoken = req.body.token
        console.log(etoken)
        const Vendor = await vendor.findOne({emailToken: req.body.token})
        if(!Vendor){
            res.status(404).json({message: "Invalid token"})
        }
        Vendor.emailToken = null
        Vendor.isVerified = true
        await Vendor.save()
        const token = jwt.sign({email_address: Vendor.email_address, id: Vendor._id, role: 'Vendor'}, process.env.JSON_SECRET_TOKEN, {expiresIn: '2h'})
        res.status(200).json({result: Vendor,  message:  "Your account has been successfully verified. You will be able to login once Admin approves your account", token})
    }catch(err){
        res.status(404).json({message: "Something went wrong."})
    }
})

router.get('/products/:id', async(req, res) => {
    try {
        const Vendor = await vendor.findById({_id: req.params.id})
        res.status(200).json({product: Vendor.products})
    }catch(err){
        res.status(404).json({message: "Something went wrong.", error: {err}})
    }
})

router.get('/profile', auth, async(req, res) => {
    try {
        const Vendor = await vendor.findById({_id: req.userID})
        res.status(200).json({profile: Vendor})
    }catch(err){
        res.status(404).json({message: "Something went wrong."})
    }
})

router.put('/editprofile', auth, async(req, res) => {
    const {shop_name, phoneno, email_address, delivery_time, timing, delivery_charges} = req.body
    try {
        let option = {}
        option.new=true
        option.omitUndefined=true
        const Vendor = await vendor.findOneAndUpdate(req.userID, {'shop_name': shop_name, 'phoneno': phoneno, 'email_address': email_address, 'delivery_time': delivery_time, 'delivery_charges': delivery_charges, 'timing': timing}, option)
        // const newVendor = await vendor.findById(req.params.id)
        res.status(200).json({message:"profile updated", profile: Vendor})
    }catch(err){
        res.status(404).json({message: "Something went wrong.", error: err})
    }
})

router.put('/addproduct', upload.single('image'), auth, async(req, res) => {
    const {name, vendor_discount, description, price, section_name, item_available} = req.body
    try {
        const Vendor = await vendor.findOne({_id:req.userID})
        // console.log(Vendor)
        // console.log(Vendor.products)
        Vendor.products.push({'_id': ObjectId(), 'name': name, 'product_image': req.file.path, 'vendor_discount': vendor_discount, 'description': description, 'price': price, 'section_name': section_name, 'item_available': item_available})
        Vendor.save()
        res.status(200).json({result: Vendor, message: "product added"})
    }catch(err){
        res.status(404).json({message: "Something went wrong.", error: err})
    }
})

router.delete('/deleteproduct', auth, async(req, res) => {
    try {
        // const {productid} = req.body
        const Vendor = await vendor.findOneAndUpdate({_id: req.userID},{$pull: {products: {$in:[{'_id': '6071aea1ca653bb2e1d97c70'}]}}},{upsert:false, multi:true})
        // , (err) =>{
        //     if(err){
        //         return res.status(404).json({message : "Could not delete the product.", error: err})
        //     }
        //     return res.status(200).json({message : "product deleted"})

        // })
        // const Vendor = await vendor.findOne({_id: req.userID})
        // // Vendor.updateOne( {cn: products}, { $pullAll: {_id: ["6071aea1ca653bb2e1d97c70"]}})
        // // Vendor.products.pull({"_id": "6071aea1ca653bb2e1d97c70"})
        // Vendor.products.pull({'name': 'Paratha Roll'}, {upsert:false, multi:true})
        // // console.log(product)const product = await 
        // // console.log(Vendor.products)
        // Vendor.save()
        res.status(200).json({result: Vendor, message: "product deleted"})
    }catch(err){
        res.status(404).json({message: "Something went wrong.", err})
    }
})

module.exports = router
