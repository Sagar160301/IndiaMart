// Registration of the user
// Login of the user

const User = require("../models/user.model")
const jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (user) => {
    return jwt.sign({user}, process.env.SECRET_KEY)
}
const register = async (req, res) => {
    try{
        let user = await User.findOne({$or: [{ email: req.body.email },{ mobileno: req.body.mobileno}]}).lean().exec();
   

        //checking email
        if(user){
            return res.status(401).send({message : "Email already exists" })
        }

        // if new user, create it or allow to register;
        user = await User.create(req.body);

        const token = generateToken(user)
        return res.status(201).send({user, token});
    }
    catch(err){
        res.status(401).send({messages : err.message})
    }
}


const login = async (req, res) => {
    try{
        
        const user = await User.findOne({mobileno : req.body.mobileno})
        //checked if mail exists
        

        // if it matches
        if(user){
            const token = generateToken(user)
            return res.status(201).send({user, token});
        }
        else{
            res.status(401).send({message : "not Found"});
        }


    }
    catch(err){
        res.status(401).send({message : err.message})
    }
}

module.exports = {register,login}

