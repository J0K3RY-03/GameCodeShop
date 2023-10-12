const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerNewUser = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;

    // Since Username and Email are unique, I have to check if the username or email input value already exists in the Database
    const existingUserNickname = await UserModel.findOne({ username });
    const existingUserEmail = await UserModel.findOne({ email });

    if (existingUserNickname) {
      return res.json({
        message: "The introduced Username already belongs to an account.",
      });
    }

    if (existingUserEmail) {
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

    const user = await UserModel.findOne({ email });

    const userID = { id: user._id };

    const token = jwt.sign(userID, process.env.ACCESS_TOKEN_SECRET);

    res.json({
      token,
      userID,
      message: "User registered.",
    });
  } catch (error) {
    res.json({ message: "User registration failed." });
  }
};

const loginUser = async (req, res) => {
  try {
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
  } catch (error) {
    res.json({ message: "User login failed." });
  }
};

const displayUserInformation = async (req, res) => {
  // Get token from cookies
  const token = req.cookies.access_token;

  if (!token) {
    return res.json({ message: "You don't have permission, please log in!" });
  }

  try {
    // Verify JWT token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    //Get the User ID from the token
    const userID = decodedToken.id;

    const user = await UserModel.findOne({ _id: userID });

    res.json({ userInfo: user });
  } catch (error) {
    res.json({ message: "You don't have permission, please log in!" });
  }
};

const updateUserPersonalInformation = async (req, res) => {
  // Get token from cookies
  const token = req.cookies.access_token;

  if (!token) {
    return res.json({ message: "You don't have permission, please log in!" });
  }

  try {
    // Verify JWT token
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

      res.json({
        firstName,
        lastName,
        userID,
        message: "Personal information updated!",
      });
    } else {
      res.json({ message: "There's been an error. Log in again, please." });
    }
  } catch (error) {
    res.json({ message: "You don't have permission, please log in!" });
  }
};

const updateUserEmail = async (req, res) => {
  // Get token from cookies
  const token = req.cookies.access_token;

  if (!token) {
    return res.json({ message: "You don't have permission, please log in!" });
  }

  try {
    // Verify JWT token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    //Get the User ID from the token
    const userID = decodedToken.id;

    const user = await UserModel.findOne({ _id: userID });

    if (user) {
      const { email, confirmEmail, password } = req.body;

      // Check if password value input matches the one stored inside the DB
      const checkPassword = await bcrypt.compare(password, user.password);

      if (!checkPassword) {
        return res.json({
          message: "Password introduced is incorrect.",
        });
      }

      // Check if email and confirmEmail have same value
      if (email !== confirmEmail) {
        return res.json({ message: "Emails need to match." });
      }

      // Check if the new wanted email already exists in our DB
      const checkIfEmailExists = await UserModel.findOne({ email });

      if (checkIfEmailExists) {
        return res.json({
          message: "Email introduced already belongs to an account.",
        });
      }

      // Update user information
      const userUpdate = await UserModel.updateOne(
        { _id: userID },
        { $set: { email } }
      );

      res.json({ email, userID, message: "Email updated!" });
    } else {
      res.json({ message: "There's been an error. Log in again, please." });
    }
  } catch (error) {
    res.json({ message: "You don't have permission, please log in!" });
  }
};

const updateUserPassword = async (req, res) => {
  // Get token from cookies
  const token = req.cookies.access_token;

  if (!token) {
    return res.json({ message: "You don't have permission, please log in!" });
  }

  try {
    // Verify JWT token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    //Get the User ID from the token
    const userID = decodedToken.id;

    const user = await UserModel.findOne({ _id: userID });

    if (user) {
      const { newPassword, confirmNewPassword, currentPassword } = req.body;

      if (newPassword !== confirmNewPassword) {
        return res.json({ message: "Passwords don't match." });
      }

      if (currentPassword === newPassword) {
        return res.json({
          message: "New password needs to be different from the current one.",
        });
      }

      // Check if password value input matches the one stored inside the DB
      const checkPassword = await bcrypt.compare(
        currentPassword,
        user.password
      );

      if (!checkPassword) {
        res.json({
          message: "The current password introduced is incorrect.",
        });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Update user information
      const userUpdate = await UserModel.updateOne(
        { _id: userID },
        { $set: { password: hashedPassword } }
      );

      res.json({ message: "Password modified!", userID });
    } else {
      res.json({ message: "There's been an error, log in again." });
    }
  } catch (error) {
    res.json({ message: "You don't have permission, please log in!" });
  }
};

module.exports = {
  registerNewUser,
  loginUser,
  updateUserPersonalInformation,
  updateUserEmail,
  updateUserPassword,
  displayUserInformation,
};
