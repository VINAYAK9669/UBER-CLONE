require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectToDb = require("./db/db");

const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.route");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// Database connection
connectToDb();

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// ROUTES FOR DIFFERENT APIS
app.use("/users", userRoutes);
app.use("/captain", captainRoutes);
module.exports = app;
