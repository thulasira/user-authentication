const express = require('express');
const router = express.Router();
const User = require('../model/user'); // Adjust the path to your User model
const login = require("../controller/login");
const createUser = require("../controller/signup");
// Example route
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.post("/signup", createUser);
router.post("/login", login);
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

module.exports = router;
