const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
    qty:{type:Number, required:true},
    price:{type:String,required:true},
    brand:{type:String,required:true},
    need:{type:String,required:true},
    requirement:{type:String,required:true},
    gst_number:{type:String,required:true},
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true,
    }
},{
    timestamps : true,
    versionKey : false,
})



const Booking = mongoose.model("bookings", bookingSchema)

module.exports = Booking;
