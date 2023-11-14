const bcrypt = require("bcrypt");
const User = require("../models/user");


module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.findAll();

    res.json({
      message: "Managed to get User",
      data: users,
    });
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    const user = await User.find((user) => user.id == id);

    res.json({
      message: "Managed to get User by Id",
      data: user,
    });
  },

  createUser: async (req, res) => {
    let data = req.body;

    try {
      const hashPassword = bcrypt.hashSync(data.password, 10);
      data.password = hashPassword;

      await User.create(data);

      res.status(201).json({
        message: "Successfully added User",
      });
        
    } catch {
      res.json({
        message: "Failed to add User",
      });
    }
  },
};