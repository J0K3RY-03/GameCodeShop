const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerNewUser = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  const userNickname = await UserModel.findOne({ username });

  // Since Username and Email are unique, I have to check if the username or email input value already exists in the Database

  if (userNickname) {
    return res.json("Username already exists.");
  }

  const userEmail = await UserModel.findOne({ email });

  if (userEmail) {
    return res.json("User email already exists.");
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

  res.json("User registered.");
};

const loginUser = async (req, res) => {
  const user = ({ email, password } = req.body);

  if (!user) {
    return res.json("User doesn't exist.");
  }

  // Check if password value input matches the one stores inside the DB
  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.json("Username or password incorrect.");
  }

  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });
};

module.exports = registerNewUser;
