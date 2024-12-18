const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
  registerValidation,
  loginValidation,
} = require("../validators/authValidator");
const authMiddleware = require("../middlewares/auth.middleware");

const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/user.controller");

// * POST REQUESTS
router.post("/register", registerValidation, registerUser);

router.post("/login", loginValidation, loginUser);

// * GET REQUESTS
router.get("/profile", authMiddleware, getUserProfile);

module.exports = router;
