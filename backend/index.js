const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDb"))
  .catch((err) => console.log(err));

const app = express();

app.listen("5001", () => {
  console.log("Backend is running!");
});
