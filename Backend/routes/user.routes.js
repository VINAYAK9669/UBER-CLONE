const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { registerValidation } = require("../validators/authValidator");
const { registerUser } = require("../controllers/user.controller");

router.post("/register", registerValidation, registerUser);

module.exports = router;
