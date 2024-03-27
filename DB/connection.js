const mongoose=require("mongoose")


mongoose.connect(process.env.CONNECTION_STRING).then(
    result=>{
        console.log("MongoDB Atlas Connected with pfServer");
    }
).catch(err=>{
    console.log("Connected Failed!!!");
    console.log(err);
})