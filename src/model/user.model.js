const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    product_image:{type:String,required:true},
    product_name
:{type:String,required:false},
    // product_rating:{type:Number,required:false},
    product_price:{type:Number,required:false},
},
{versionKey:false,timestamp:false}

);

module.exports = mongoose.model("/user",userSchema);