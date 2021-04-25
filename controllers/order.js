const shoppingCart = require('../models/shoppingcart.model')
const order =  require('../models/orders.model.js')
const customer =  require('../models/customer.model') 

exports.addnew = async (req,res) =>{ //order added by customer
    if(!req.userID){ //customer id
        return res.status(404).json({message: "User is not authenticated."})
    }
    const currentCustomer = await customer.findOne({ _id: req.userID})
    if(!currentCustomer){
        return res.status(404).json({message: "Not a registered customer."})
    }
    const customerCart = await shoppingCart.findOne({_id: req.userID})
    if((customerCart.products).length==0){
        return res.status(404).json({message: "Empty shopping cart."})
    }
    const {note, voucher} = req.body
    const date = new Date()
    let neworder = new order({customer: req.userID, vendor:customerCart.vendor_id, vendor_name: customerCart.vendor_name, products: customerCart.products, total_amount: customerCart.total_price, delivery_charges: customerCart.delivery_charges, order_note: note, discount_voucher: voucher, date_ordered: date, isConfirmed: false})
    neworder.save()
    .then(()=>res.status(200).send({result: neworder, message: "saved successfully"}))
    .catch(err => res.status(400).json('Error' + err))
    customerCart.products = []
    customerCart.total_price = 0
    customerCart.vendor_name = ""
    customerCart.vendor_id = ""
    customerCart.delivery_charges =""
    customerCart.save()
}

exports.getByvendorId = async (req,res) =>{
    if(!req.userID){ 
        return res.status(404).json({message: "User is not authenticated."})
    }
    order.find({vendor : req.userID})
    .then(ord => res.status(200).json(ord))
    .catch(err => res.status(400).json("error :" + err))
}

exports.getByCustomerId = async (req,res) =>{
    if(!req.userID){ 
        return res.status(404).json({message: "User is not authenticated."})
    }
    order.find({customer : req.params.id})
    .then(ord => res.status(200).json(ord))
    .catch(err => res.status(400).json("error :" + err))
}

exports.confirmOrder = async (req,res) =>{
    if(!req.userID){ 
        return res.status(404).json({message: "User is not authenticated."})
    }
    const curr_order = await order.findOne({_id: req.params.orderid})
    if(curr_order.vendor === req.userID && curr_order.isConfirmed === false){
        curr_order.isConfirmed = true
        curr_order.save()
        res.status(200).json(curr_order)
    }
    else{
        res.status(404).json({message: "Already confirmed order"})
    }
}
