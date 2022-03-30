const connect = require("./config/db.js")
const express = require("express");
const cors =require("cors");

const usercontroller = require("./controller/user.controller");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/users",usercontroller);


app.listen(5000, async()=>{
     
    try{
        await connect();
        console.log("Listening on port 5000");
    }
    catch(err){
        console.log(err.message);
    }
    
});