const mongoose = require("mongoose")

module.exports=mongoose.connect('mongodb+srv://test:test@cluster0.wnqwvge.mongodb.net/toDoretryWrites=true&w=majority&appName=Cluster0').then(
    ()=>{
        console.log("Db connection sucessfull.");
    }

).catch(
    (err)=>{
        console.log(err);
    }
)