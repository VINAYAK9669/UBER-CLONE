const express = require("express");
const router = express.Router();
const {
  registerValidation,
  loginValidation,
} = require("../validators/captain/captainAuthValidators");

const { authCaptain } = require("../middlewares/auth.middleware");

const {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
} = require("../controllers/captain.controller");
const { logoutUser } = require("../controllers/user.controller");

// Register a Captain
router.post("/register", registerValidation, registerCaptain);

// Login a Captain
router.post("/login", loginValidation, loginCaptain);

router.get("/profile", authCaptain, getCaptainProfile);

router.get("/logout", authCaptain, logoutUser);

module.exports = router;
