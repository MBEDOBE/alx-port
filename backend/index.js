const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const app = express();

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

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen("5001", () => {
  console.log("Backend is running!");
});
