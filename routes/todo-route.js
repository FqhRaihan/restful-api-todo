const express = require("express");
const route = express.Router();

const {
  getAllTodo,
  getTodoById,
  addTodo,
  editTodoById,
  deleteTodoById,
  deleteAllTodo,
} = require("../controllers/todo-controller");

route.get("/", getAllTodo);
route.get("/:id", getTodoById);
route.post("/", addTodo);
route.put("/:id", editTodoById);
route.delete("/:id", deleteTodoById);
route.delete("/", deleteAllTodo);

module.exports = route;