
const service = require('../services/service')

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

module.exports={Register}