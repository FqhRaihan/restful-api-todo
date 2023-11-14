const express = require ('express');
const route = express.Router()


const { getAllTodo, getTodoById, addTodoById, editTodoById, deleteTodoById } = require('../controllers/todo-controller');

route.get("/", getAllTodo )
route.get("/:id", getTodoById),
route.post("/", addTodoById),
route.put("/:id", editTodoById),
route.delete("/:id", deleteTodoById),


module.exports = route