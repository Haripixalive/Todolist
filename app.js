const e=require('express')
const app=e()
const userrouter= require('./router/userrouter')
const todorouter = require('./router/todorouter')
const parser= require('body-parser')

app.use(parser.json())
app.use(userrouter)
app.use(todorouter)
module.exports=app