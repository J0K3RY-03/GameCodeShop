const express = require("express");
const router = express.Router();
const {
  registerNewUser,
  loginUser,
  updateUserPersonalInformation,
  updateUserEmail,
} = require("../controllers/usersController");
// const { verifyToken } = require("../middlewares/authMiddleware");

router.post("/register", registerNewUser);

router.post("/login", loginUser);

router.post(
  "/profile/myprofile-personal-information",
  updateUserPersonalInformation
);

router.post("/profile/myprofile-email", updateUserEmail);

router.post("/profile/myprofile-password");

module.exports = router;
