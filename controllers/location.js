const location =  require('../models/location.js')
const { config } = require('dotenv')
config()

exports.setLoc = async (req,res)=>{
    let user_id;
    try{
        user_id = req.body.id
    }
    catch{
        res.status(201).send("Invalid user ID")
    }
    let loc = {
        address : '',
        latitude : 0,
        longitude : 0
    };
    try{
        loc.address = req.body.address
        loc.latitude = req.body.latitude
        loc.longitude = req.body.longitude
    }
    catch{
        res.status(400).send("some objects missing in the post request")
    }
    location.findOneAndUpdate({customer : user_id}, loc)
    .then(()=>res.status(200).send("location updates"))
    .catch((err)=>res.status(400).json('Error' + err))
}

exports.getLoc = async (req,res)=>{
    location.findById(req.params.id)
    .then(loc => res.json(loc))
    .catch(err => res.status(400).json('Error: ' + err))
}

exports.reverse_geocode = async (req,res) =>{
    let lat = 0
    let lng = 0
    try{
        lat = req.body.latitude
        lng = req.body.longitude
    }
    catch{
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ address: "invalid arguments sent" }));
    }
    let g_url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}` + "&key=" + process.env.KEY
    console.log(g_url)
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ address: "need google api" }));
}