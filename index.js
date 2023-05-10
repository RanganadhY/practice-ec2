const express = require("express")
const app = express();
require("./db")
const cors=require("cors");
const batchModel = require("./batch")
app.get("/get",async(req,res)=>{
    const response = await batchModel.find()
    res.status(200).json({"response":response})
})

app.listen(3000,()=>{
    console.log("running on port 3000")
})