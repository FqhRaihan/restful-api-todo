const express = require ('express');
const route = express.Router()
const todoRoutes = require("./todo-route")


route.use("/todos",todoRoutes)

module.exports = route