const mongoose = require('mongoose')
const bcrypt=require("bcrypt")
const schema= mongoose.Schema

const UserSchema= new schema({
    email:{
    type:"string",
    required:true,
    lowercase:true,
    unique:true
    },
    password:{
    type:"string",
    required:true
    }
})
UserSchema.pre('save',async function() 
{
    const user =this;
    const salt= await bcrypt.genSalt(10);
    const hash= await bcrypt.hash(user.password,salt);
    user.password=hash;
})


const usermodel = mongoose.model('anime',UserSchema)
module.exports=usermodel