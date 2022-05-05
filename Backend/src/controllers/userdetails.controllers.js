
const express=require("express")

const User = require("../models/user.model");
const authenticate = require("../middleware/authenticate")

const router = express.Router();

router.get("", authenticate, async(req,res) =>{
    try{

         
        const user = await User.findById(req.userID).lean().exec();
        return res.status(201).send(user)
    }
    catch(err){
        return res.status(401).send({message : err.message})
    }

})

module.exports=router;
