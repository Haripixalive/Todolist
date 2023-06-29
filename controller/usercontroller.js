const service = require('../services/service')
const bcrypt= require('bcrypt') 

const Register=async(req,res)=>{
    try{
        const {email,password}= req.body;
        const user= await service.RegisterUser(email,password)
        res.json(user)
    }
    catch(err){
        console.log(err);
    }
}

const Login=async(req,res)=>{
    try{
        const {email,password}= req.body
        const user= await service.checkuser(email)
        if(!user){
            throw new Error("user not found")
        }

        const isMatch= await bcrypt.compare(password, user.password)
        if(!isMatch){
            throw new Error("invalid password")
        }

        let tokenData = {
            id: user._id,
            email: user.email
        }

        const token = await service.generatetoken(tokenData, 'secretkey');
        res.status(200).json({
            status: true,
            token: token
        })
    }
    catch(err){
        console.log(err)
    }
}
module.exports={Register,Login}