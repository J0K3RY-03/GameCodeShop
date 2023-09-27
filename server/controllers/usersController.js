const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const registerNewUser = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  // Since Username and Email are unique, I have to check if the username or email input value already exists in the Database
  const userNickname = await UserModel.findOne({ username });
  const userEmail = await UserModel.findOne({ email });

  if (userNickname) {
    return res.json({
      message: "The introduced Username already belongs to an account.",
    });
  } else if (userEmail) {
    return res.json({
      message: "The introduced Email already belongs to an account.",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({
    firstName,
    lastName,
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  res.json({ message: "User registered." });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.json({
      message: "The introduced email doesn't belong to an account.",
    });
  }

  // Check if password value input matches the one stored inside the DB
  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.json({
      message: "Email and password combination is incorrect.",
    });
  }

  const username = { username: user.username };

  const token = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET);

  res.json({
    token,
    userID: user._id,
    message: "You logged in!",
    username,
  });
};

module.exports = {
  registerNewUser,
  loginUser,
};
