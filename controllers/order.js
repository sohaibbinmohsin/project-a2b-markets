const order =  require('../models/orders.js')

exports.addnew = async (req,res) =>{
    let neworder = new order(req.body)
    neworder.save()
    .then(()=>res.status(200).send("saved successfully"))
    .catch(err => res.status(400).json('Error' + err))
}

exports.getByvendorId = async (req,res) =>{
    order.find({vendor : req.params.id})
    .then(ord => res.status(200).json(ord))
    .catch(err => res.status(400).json("error :" + err))
}

exports.getByCustomerId = async (req,res) =>{
    order.find({customer : req.params.id})
    .then(ord => res.status(200).json(ord))
    .catch(err => res.status(400).json("error :" + err))
}