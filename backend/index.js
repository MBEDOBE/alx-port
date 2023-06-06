const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDb"))
  .catch((err) => console.log(err));

//

app.use("/backend/auth", authRoute);
app.use("/backend/users", userRoute);

app.listen("5001", () => {
  console.log("Backend is running!");
});
