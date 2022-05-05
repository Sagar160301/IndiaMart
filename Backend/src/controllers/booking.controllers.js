
const express=require("express")

const Booking = require("../models/booking.model");
const authenticate = require("../middleware/authenticate")

const router = express.Router();

router.post("", authenticate, async(req,res) =>{
    try{

         req.body.userid=req.userID;
        const booking = await Booking.create(req.body);
        return res.status(201).send(booking)
    }
    catch(err){
        return res.status(401).send({message : err.message})
    }

})

module.exports=router;
