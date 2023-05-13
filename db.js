const mongoose = require("mongoose");

mongoose.connect("mongodb://dev-test:1234567890@veots-cluster0-shard-00-00.urbh6.mongodb.net:27017,veots-cluster0-shard-00-01.urbh6.mongodb.net:27017,veots-cluster0-shard-00-02.urbh6.mongodb.net:27017/?ssl=true&replicaSet=atlas-5momgr-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error",(error)=>console.log(error))
db.once("open",()=>console.log("Connected to Database"))
