const user = require("../model/user.model.js");

const express = require("express");

const app = express.Router();

app.post("/",async(req,res)=>{
    try{
    const User = await user.create(req.body);
    return res.send({"users":User})
    }
    catch(err){
        return res.send(err.message)
    }
})

 
app.get("",async(req,res) =>{
    try{
    const User = await user.find();
    console.log(User);
    return res.send(User);
    }
    catch(err){
        return res.send(err.message)
    }

});


module.exports = app;


