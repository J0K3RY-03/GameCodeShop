const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {
  registerNewUser,
  loginUser,
} = require("../controllers/usersController");

router.post("/register", registerNewUser);

router.post("/login", loginUser);

module.exports = router;
