const e=require('express')
const app=e()
const router= require('./router/userrouter')
const parser= require('body-parser')

app.use(parser.json())
app.use(router)
module.exports=app