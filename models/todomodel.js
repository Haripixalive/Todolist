const mongoose = require('mongoose')
const usermodel = require('./usermodel')

const schema = mongoose.Schema

const TodoSchema = new schema({
    userId: {
        type: schema.Types.ObjectId,
        ref: 'anime'
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})

const todomodel = mongoose.model("Todo", TodoSchema)
module.exports = todomodel