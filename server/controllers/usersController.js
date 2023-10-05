const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

  const userID = { id: user._id };

  const token = jwt.sign(userID, process.env.ACCESS_TOKEN_SECRET);

  res.json({
    token,
    message: "You logged in!",
    userID,
  });
};

const updateUserPersonalInformation = async (req, res) => {
  // Get token from cookies
  const token = req.cookies.access_token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "You don't have permission, please log in!" });
  }

  // Verify JWT token
  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    //Get the User ID from the token
    const userID = decodedToken.id;

    const user = UserModel.findOne({ _id: userID });

    if (user) {
      const { firstName, lastName } = req.body;

      // Update user information
      const user = await UserModel.updateOne(
        { _id: userID },
        { $set: { firstName, lastName } }
      );

      res.json({ firstName, lastName, userID });
    } else {
      res
        .status(401)
        .json({ message: "There's been an error. Log in again, please." });
    }
  } catch (error) {
    res
      .status(401)
      .json({ message: "You don't have permission, please log in!" });
  }
};

const updateUserEmail = async (req, res) => {
  // Get token from cookies
  const token = req.cookies.access_token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "You don't have permission, please log in!" });
  }

  // Verify JWT token
  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    //Get the User ID from the token
    const userID = decodedToken.id;

    const user = await UserModel.findOne({ _id: userID });

    if (user) {
      const { email, password } = req.body;

      // Check if password value input matches the one stored inside the DB
      const checkPassword = await bcrypt.compare(password, user.password);

      if (!checkPassword) {
        return res.status(401).json({
          message: "Password introduced is incorrect.",
        });
      }

      // Update user information
      const userUpdate = await UserModel.updateOne(
        { _id: userID },
        { $set: { email } }
      );

      res.json({ email, userID });
    } else {
      res
        .status(401)
        .json({ message: "There's been an error. Log in again, please." });
    }
  } catch (error) {
    res
      .status(401)
      .json({ message: "You don't have permission, please log in!" });
  }
};

const updateUserPassword = async (req, res) => {
  // Get token from cookies
  const token = req.cookies.access_token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "You don't have permission, please log in!" });
  }

  // Verify JWT token
  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    //Get the User ID from the token
    const userID = decodedToken.id;

    const user = await UserModel.findOne({ _id: userID });

    if (user) {
      const { password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      // Check if password value input matches the one stored inside the DB
      // const checkPassword = await bcrypt.compare(password, user.password);

      if (!checkPassword) {
        return res.status(401).json({
          message: "Password introduced is incorrect.",
        });
      }

      // Update user information
      const userUpdate = await UserModel.updateOne(
        { _id: userID },
        { $set: { password: hashedPassword } }
      );

      res.json({ message: "password modified", userID });
    } else {
      res
        .status(401)
        .json({ message: "There's been an error. Log in again, please." });
    }
  } catch (error) {
    res
      .status(401)
      .json({ message: "You don't have permission, please log in!" });
  }
};

module.exports = {
  registerNewUser,
  loginUser,
  updateUserPersonalInformation,
  updateUserEmail,
  updateUserPassword,
};
