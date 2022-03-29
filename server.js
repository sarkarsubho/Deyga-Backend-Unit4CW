const app=require("./allProduct/src/index");
const connect=require("./allProduct/src/configs/db");

app.listen(5000, async function(){
     try{
        await connect();
        console.log("listning on port 5000");

    }catch(err){

        console.error(err.message);
    }
        
}
   
)