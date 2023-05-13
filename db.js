const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dev-test:1234567890@veots-cluster0.urbh6.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error",(error)=>console.log(error))
db.once("open",()=>console.log("Connected to Database"))
