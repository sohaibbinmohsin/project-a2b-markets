require('dotenv').config()
const express = require('express')
let bcrypt = require('bcryptjs') 
let crypto = require('crypto')
let nodemailer = require('nodemailer')
let auth = require('../middleware/auth')
let jwt = require('jsonwebtoken')
let customer =  require('../models/customer.model') 

const router = express.Router()

router.post('/signin', async (req,res) =>{
    const{email_address, password, role} = req.body
    let User;
        if(role==="Customer"){
            User = await customer.findOne({email_address})
        }
        if(!User){
            return res.status(404).json({message: `${role} does not exist`})
        }
        if(User.isVerified === false){
            return res.status(404).json({message: "Your account has not yet been verified."})
        }
        const isCorrectPassword = await bcrypt.compare(password, User.password)
        if(!isCorrectPassword){
            return res.status(404).json({message: "Incorrect password"})
        }
        else
        {
            const token = jwt.sign({email_address: User.email_address, id: User._id, role: role}, process.env.JSON_SECRET_TOKEN, {expiresIn: '2h'})
            return res.status(200).json({message: "Successfully signed in!", token})
        }
})



//Reset Password: Resetting if signed in: http://localhost:8000/user/reset-password with signin token in authorization bearer token header
//Resetting from forgot password link: link sent in mail
//password, confirmPassword in body and role = "Customer" for signed in customer
router.post('/reset-password', auth, async(req,res)=>{
    let User;
    if(!req.userID){ //forgot password
        if(req.query.role === "Customer"){
            User = await customer.findOne({"passwordToken": req.query.token})
            if(!User) return res.status(404).json({message: "This link is not valid for changing password."})
            User.passwordToken = null
        }
    }
    else{
        if(req.body.role === "Customer")
        {
            User = await customer.findOne({_id: req.userID})
            if(!User) return res.status(404).json({message: "Couldnot find this customer"})
            console.log("FOUND CUSTOMER")
        }
    }
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    if(password!=confirmPassword){
        return res.status(400).json({message: "Passwords do not match"})
    }
    User.password = await bcrypt.hash(password,12)
    User.save().then(()=> res.json({message: "Password updated successfully!"})).catch(err => res.json({message:"Could not update password"}))
})
//http://localhost:8000/user/forgot-password, email_address and role ="Customer" in body
router.post('/forgot-password', async(req,res)=>{
    const email_address = req.body.email_address
    const role = req.body.role
    let User;
    let passwordToken = crypto.randomBytes(64).toString('hex')
    if(role==="Customer"){
        User = await customer.findOne({email_address})
    }
    if(!User) return res.status(404).json({message: "This user does not exist."})
    User.passwordToken = passwordToken
    await User.save()

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'dummya2b@gmail.com',
          pass: 'hello@1234_'
        }
      });
    
    var mailOptions = {
        from: 'dummya2b@gmail.com',
        to: User.email_address,
        subject: 'A2B Markets - Forgot Password',
        text: `Hello ${User.name}. Click on this link to change your password. http://${req.headers.host}/user/reset-password?role=${role}&token=${User.passwordToken}`
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            res.status(200).json({message: "An email has been sent to you. Please click on the link sent to you via email to update your password."})
        }
      });
})

module.exports = router