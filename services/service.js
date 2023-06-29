const usermodel =require('../models/usermodel')
const jwt =require('jsonwebtoken')

class CreateUser {
    static async RegisterUser(email,password){
        try{            
        const create =await usermodel.create({email,password})
        return create;
        }
        catch(err){
            console.log(err);
        }
    }

    static async checkuser(email){
        try{
            return await usermodel.findOne(email)
        }
        catch(err){
            console.log(err);
        }
    }

    static async generatetoken(tokendata, secretkey){
        try{
            return jwt.sign(tokendata,secretkey, {expresIn:'1D'})
        }
        catch(err){
            console.log(err);
        }
    }
}

module.exports=CreateUser