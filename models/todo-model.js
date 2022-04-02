const mongoose = require("../db/connection")

const ToDoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true}
)

const Todo = mongoose.model('Todo', ToDoSchema)

module.exports = Todo