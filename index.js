const express = require("express")
const app = express();
require("./db")
const cors=require("cors");
const batchModel = require("./batch")

async function getData (){
    const response = await batchModel.find()
    console.log(response)
}
getData()   

app.listen(3000,()=>{
    console.log("running on port 3000")
})