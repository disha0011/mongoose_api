const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        id:{type:String,required:true},
        name:{type:String,required:true},
        email:{type:String,required:true},
        passwordHash:{type:String,required:true}
})

const user = new mongoose.model("emp",userSchema);

module.exports=user;