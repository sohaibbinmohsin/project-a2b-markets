const shop =  require('../models/shop.js')

exports.allshops = async (req,res)=>{
    shop.find()
    .then(shops => res.status(200).json(shops))
    .catch(err => res.status(400).json('Error' + err))
}

exports.shopbyid =  async (req,res)=>{
    shop.findById(req.params.id)
    .then(shop => res.json(shop))
    .catch(err => res.status(400).json('Error' + err))
}

exports.addnew = async (req,res) =>{
    let newshop = new shop(req.body)
    newshop.save()
    .then(()=>res.status(200).send("saved successfully"))
    .catch(err => res.status(400).json('Error' + err))
}

// others to be added