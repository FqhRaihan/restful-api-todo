const Todo = require("../models/todo");
const User = require("../models/user");

module.exports = {
  getAllTodo: async (req, res) => {
    const todos = await Todo.findAll();

    res.json({
      message: "Berhasil mendapatkan Todo Data",
      data: todos,
    });
  },
  getTodoById: async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.find((todo) => todo.id == id);

    res.json({
      message: "Berhasil mendapatkan Todo Data by Id",
      data: todo,
    });
  },

  addTodo: async (req, res) => {
    let data = req.body;

    try {
      const newTodo = {
        id: Todo[Todo.length - 1].id + 1,
        value: data.value,
      };

      await Todo.push(newTodo);

      res.status(201).json({
        message: "Berhasil menambahkan Todo",
        data: Todo,
      });
        
    } catch (error) {
      res.json({
        message: "Gagal menambahkan Pengguna",
        error: error.message,
      });
    }
  },

  editTodoById: async (req, res) => {
    const { id } = req.params;
    const { value, status } = req.body;

    const index = await Todo.find((todo) => (todo.id = id));
    Todo[index] = { id, value, status };

    index.id = id || index.id;
    index.value = value || index.value;
    index.status = status !== undefined ? status : index.status;

    await index.save();

    res.json({
      message: "Successfully Updated User",
      data: Todo,
    });
  },
  deleteTodoById: async (req, res) => {
    const { id } = req.params;
    const todos = await Todo.findAll();

    try {
      const todo = await todos.find((todo) => todo.id == id);

      if (!todo) {
        res.json({
          message: "Tidak dapat menemukan Todo",
        });
      }

      await todo.destroy();

      res.json({
        message: "Berhasil menghapus Todo berdasarkan Id",
        data: todos,
      });
    } catch {
      res.json({
        message: "Tidak dapat menemukan Todo",
        data: todos,
      });
    }
  },

  deleteAllTodo: async (req, res) => {
    const todos = await Todo.findAll();

    await todos.destroy();

    res.json({
      message: "Berhasil menghapus seluruh Daftar Todo",
      data: todos,
    });
  },
};