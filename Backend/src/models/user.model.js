const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
    name : {type : String, required : true},
    mobileno: {type:Number,required:true,unique:true},
    email : {type : String, required : true, unique:true},
    dateofbirth : {type :Date, required : true},
   pincode : {type:Number,required:true},
   city : {type : String, required : true},
   state :  {type : String, required : true},
   country :  {type : String, required : true},
   houseno : {type : String, required : true},
   area : {type : String, required : true},
},{
    timestamps : true,
    versionKey : false,
})

// userSchema.pre("save", function(next){
//     const hash = bcrypt.hashSync(this.password, 8);
//     this.password = hash;
//     return next();
// })

// userSchema.methods.checkPassword = function(password){
//     return bcrypt.compareSync(password, this.password);
// }

const User = mongoose.model("user", userSchema)

module.exports = User;
