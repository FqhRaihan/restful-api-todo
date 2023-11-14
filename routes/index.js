const express = require ('express');
const route = express.Router()

const todoRoutes = require("./todo-route");
const userRoutes = require("./user-route");
const authRoutes = require("./auth-route");
const verifyToken = require("../middleware/auth");

route.use("/user", userRoutes);
route.use("/auth", authRoutes)
route.use("/todo", verifyToken,todoRoutes);

module.exports = route