const usermodel =require('../models/usermodel')

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
}

module.exports=CreateUser