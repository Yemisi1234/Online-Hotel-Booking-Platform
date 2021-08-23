const mongoose = require("mongoose");
const hotelSchema = mongoose.Schema({
    owner:{
        type:String,
        required:true
    },
    hotelName:{
        type:String,
        required:true
    },
    phonenumber:{type:Number, required:true},
    email:{type:String, required:true},
    address:{type:String, required:true},
    hotelImage:[],
})

const hotelModel = mongoose.model('hotel' , hotelSchema)

module.exports = hotelModel