const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const route = express.Router();

const User = require("../models/user");

route.post("/login", (req, res) => {
  let data = req.body;

  const user = User.find((item) => item.email == data.email);

  if (!user) {
    res.json({
      message: "Wrong Email",
    });
    return;
  }

  if (bcrypt.compareSync(data.password, user.password)) {
    const token = jwt.sign({ email: data.email }, "123");
    res.json({
      message: "Login Successful",
      token,
    });
    return;
  }

  res.json({
    message: "Wrong Password",
  });
});

route.post("/regis", (req, res) => {
  let data = req.body;

  let saltRounds = 10;
  let hashPassword = bcrypt.hashSync(data.password, saltRounds);
  data.password = hashPassword;

  console.log(data);
  User.push(data);

  res.json({
    message: "Register Successful",
  });
});

module.exports = route;