const express = require('express')
let contactUs = require('../models/contactus.model')

const router = express.Router()

router.get('/', async (req,res)=>{
    contactUs.find()
    .then(requests => res.json(requests))
    .catch(err => res.status(400).json('Error' + err))
})

router.get('/:id', async (req,res)=>{
    contactUs.findById(req.params.id)
    .then(request => res.json(request))
    .catch(err => res.status(400).json('Error' + err))
})

router.post('/add', (req,res) =>{
    const name = req.body.name
    const message = req.body.message
    const email = req.body.email
    const phoneno = req.body.phoneno
    const date = new Date()


    const newContactUs = new contactUs({name,message,email,phoneno,date})
    newContactUs.save().then(() => res.json('Request added!')).catch(err => res.status(400).json('Error'+err))
})

module.exports = router