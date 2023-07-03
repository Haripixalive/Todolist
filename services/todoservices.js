const todomodel = require('../models/todomodel')

class todoservice {
    static async createTodo(userId, title, desc) {
        try {
            const createtodo = await todomodel.create({ userId, title, desc })
            return createtodo
        }
        catch (err) {
            console.log(err)
        }
    }

    static async getTodos(userId) {
        try {
            const tododata = await todomodel.find({ userId })
            return tododata
        } catch (err) {
            console.log(err)
        }
    }

    static async deleteTodo(id) {
        try {
            const deleted = await todomodel.findOneAndDelete({_id: id })
            return deleted
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = todoservice