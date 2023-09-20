const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const registerNewUser = require("../controllers/usersController");

router.post("/register", registerNewUser);

module.exports = router;
