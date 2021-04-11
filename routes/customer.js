require('dotenv').config()
const express = require('express')
let bcrypt = require('bcryptjs') 
let crypto = require('crypto')
let nodemailer = require('nodemailer')
let jwt = require('jsonwebtoken')
let auth = require('../middleware/auth')
let customer =  require('../models/customer.model') 
let shoppingCart = require('../models/shoppingcart.model')

const router = express.Router()

router.get('/', async (req,res)=>{
    customer.find()
    .then(customers => res.json(customers))
    .catch(err => res.status(400).json('Error' + err))
})


router.post('/signup', async (req,res) =>{
    const{name, email_address, phoneno, password, confirmPassword} = req.body
        const existingCustomer =  await customer.findOne({email_address})
        if(existingCustomer && existingCustomer.isVerified == true){
            return res.status(404).json({message: "Email already exists"})
        }
        if(existingCustomer && existingCustomer.isVerified == false){
            return res.status(404).json({message: "This email is already registered. Please verify your account."})
        }
        if(confirmPassword!=password){
            return res.status(404).json({message: "Passwords do not match"})
        }
        let emailToken = crypto.randomBytes(64).toString('hex')
        let isVerified = false
        const hashedpassword = await bcrypt.hash(password,12)
        const newCustomer = new customer({name, email_address, phoneno, password: hashedpassword, isVerified, emailToken})
        newCustomer.save().then().catch(err => console.log(err))

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'dummyA2B@gmail.com',
              pass: 'hello@1234_'
            }
          });
        var mailOptions = {
            from: 'dummyA2B@gmail.com',
            to: newCustomer.email_address,
            subject: 'A2B Markets - Verify email',
            text: `Thank you for registering on our website. Please click on this link to verify your account. http://${req.headers.host}/customer/verify-email?token=${newCustomer.emailToken}`
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                res.status(200).json({message: "Thank you for registering. Please check your email to verify your account."})
            }
          });


})

router.get('/verify-email', async(req,res)=>{
    try{
        const Customer = await customer.findOne({emailToken: req.query.token})
        if(!Customer){
            res.status(404).json({message: "Invalid token"})
        }
        Customer.emailToken = null
        Customer.isVerified = true
        const new_shoppingCart = new shoppingCart({_id: Customer._id})
        await Customer.save()
        await new_shoppingCart.save()
        const token = jwt.sign({email_address: Customer.email_address, id: Customer._id, role: 'Customer'}, process.env.JSON_SECRET_TOKEN, {expiresIn: '2h'})
        res.status(200).json({result: Customer,  message:  "Welcome to A2B Markets. Your account has been successfully verified", token})
    }catch(err){
        res.status(404).json({message: "Something went wrong."})
    }
})

router.post('/decreaseItemQuantity',auth, async(req,res)=>{//make changes in it
    if(!req.userID){
        return res.status(404).json({message: "User is not authenticated."})
    }
    const currentCustomer = await customer.findOne({ _id: req.userID})
    if(!currentCustomer){
        return res.status(404).json({message: "Not a registered customer."})
   
    }
    const productID = req.body.product_id
    const customerCart = await shoppingCart.findOne({_id: currentCustomer._id})
    let found = 0
    let tempPrice = 0
    customerCart.products.forEach((cartItem)=>{
            if(cartItem.product_id === productID){
                found = 1
                if(cartItem.product_quantity ==1){
                shoppingCart.findOneAndUpdate({_id: currentCustomer._id},{$pull: {products: {product_id: productID}}},{upsert:false, multi:true}, (err, updatedCart) =>{
                    if(err){
                        return res.status(404).json({message : "Could not remove item from cart."})
                    }
                    return res.status(200).json({message : "Item removed from cart"})
    
                })
            }
            else{
                shoppingCart.findOneAndUpdate({_id: currentCustomer._id, "products.product_id": productID},{$inc: {"products.$.product_quantity": -1}},(err, updatedCart) =>{
                    if(err){
                        return res.status(404).json({message : "Couldnot remove item from cart."})
                    }
                    console.log(updatedCart)
                    return res.status(200).json({message : "Item removed from cart"})
    
                })

            }
            customerCart.total_price -= cartItem.product_price
            customerCart.save()
        }
    })
    if(found===0){
        return res.status(404).json({message : "Couldnot find item in cart."})
    }
})


router.post('/removeFromCart',auth, async(req,res)=>{
    if(!req.userID){
        return res.status(404).json({message: "User is not authenticated."})
    }
    const currentCustomer = await customer.findOne({ _id: req.userID})
    if(!currentCustomer){
        return res.status(404).json({message: "Not a registered customer."})
   
    }
    const productID = req.body.product_id
    const customerCart = await shoppingCart.findOne({_id: currentCustomer._id})
    let found = 0
    customerCart.products.forEach((cartItem)=>{
        if(cartItem.product_id === productID){
            found = 1
            shoppingCart.findOneAndUpdate({_id: currentCustomer._id},{$pull: {products: {product_id: productID}}},{upsert:false, multi:true}, (err, updatedCart) =>{
                if(err){
                    return res.status(404).json({message : "Could not remove item from cart."})
                }
                return res.status(200).json({message : "Item removed from cart"})

            })
            customerCart.total_price -= (cartItem.product_price)*(cartItem.product_quantity)
            customerCart.save()
        }
    })
    if(found===0){
        return res.status(404).json({message : "Couldnot find item in cart."})
    }
})


router.get('/viewCart',auth, async(req,res)=>{
    if(!req.userID){
        return res.status(404).json({message: "User is not authenticated."})
    }
    const currentCustomer = await customer.findOne({ _id: req.userID})
    if(!currentCustomer){
        return res.status(404).json({message: "Not a registered customer."})
   
    }
    const customerCart = await shoppingCart.findOne({_id: currentCustomer._id})
    if(customerCart){
        res.json(customerCart)
    }
    else{
        res.status(404).json({message: "Something went wrong"})
    }

})

router.post('/addToCart', auth, async(req,res)=>{
    if(!req.userID){
        return res.status(404).json({message: "User is not authenticated."})
    }
    const currentCustomer = await customer.findOne({ _id: req.userID})
    if(!currentCustomer){
        return res.status(404).json({message: "Not a registered customer."})
   
    }
    const productID = req.body.product_id
    const productQuantity = 1
    const productPrice = req.body.product_price
    const customer_shoppingCart = await shoppingCart.findOne({_id: req.userID})
    let exists = false
    customer_shoppingCart.products.forEach((cartItem)=>{
        if(cartItem.product_id === productID){
            exists = true
            shoppingCart.findOneAndUpdate({_id: currentCustomer._id, "products.product_id": productID},{$inc: {"products.$.product_quantity": 1,"total_price":productPrice}},(err, updatedCart) =>{
                if(err){
                    return res.status(404).json({message : "Couldnot add item to cart."})
                }
                return res.status(200).json({message : "Item added to cart"})

            })
        }
    })
    if(!exists){
        shoppingCart.findOneAndUpdate({_id: currentCustomer._id},{$push: {
            products:{
                "product_id": productID,
                "product_quantity": productQuantity,
                "product_price": productPrice
            }
        }, $inc:{"total_price": productPrice}},
        (error, shoppingCartInfo) =>{
            if(error) return res.status(404).json({message: "Item not added"})
            res.status(200).json({result :shoppingCartInfo, message : "Item added to cart"})
        } 
    )
    
}})

module.exports = router