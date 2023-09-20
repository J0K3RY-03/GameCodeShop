const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerNewUser = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  const userNickname = await UserModel.findOne({ username });

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

module.exports = registerNewUser;
