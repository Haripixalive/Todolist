const controller =require('../controller/usercontroller')
const e=require('express')
const router= e.Router();

router.post('/register',controller.Register)
router.post('/login',controller.Login)

module.exports= router