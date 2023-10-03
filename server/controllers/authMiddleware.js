const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const token = req.header.authorization;

  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err) => {
      if (err) return res.sendStatus(403);

      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  verifyToken,
};
