const express = require("express");
const router = express.Router();
const {
  registerNewUser,
  loginUser,
} = require("../controllers/usersController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.post("/register", verifyToken, registerNewUser);

router.post("/login", loginUser);

module.exports = router;
