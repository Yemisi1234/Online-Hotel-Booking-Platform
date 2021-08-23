const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://OmotoshoJoseph:ohpyhqxwBXGSSJ6b@cluster0.xnocl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose