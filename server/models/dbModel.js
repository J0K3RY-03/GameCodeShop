const mongoose = require("mongoose");

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

// Connection DB

const dbUrl = `mongodb+srv://${dbUser}:${dbPassword}@e-shopgaming.iplybjq.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to DB.");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDb;
