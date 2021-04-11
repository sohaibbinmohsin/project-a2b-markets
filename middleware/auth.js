require('dotenv').config()
const jwt = require('jsonwebtoken')

const auth = async(req, res, next)=>{
    try{
        if (req._parsedUrl.pathname === "/reset-password" && Object.keys(req.query).length != 0){
            req.userID = null
            next()
        }
        else{
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(" ")[1] //Bearer Token [1] --> Token
        if(token === null){
            return res.status(404).json({message: "Invalid token"})
        }
        else{
            jwt.verify(token, process.env.JSON_SECRET_TOKEN, (err, user)=>{
                if(err){
                    return res.status(404).json({message: "Invalid token", error: err})
                }
                else
                req.userID = user.id
                next()
            })
        }
    }}catch(err){
        console.log(err)
    }
}

module.exports = auth;