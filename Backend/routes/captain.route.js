const express = require("express");
const router = express.Router();
const {
  registerValidation,
} = require("../validators/captain/captainAuthValidators");

const { registerCaptain } = require("../controllers/captain.controller");

router.post("/register", registerValidation, registerCaptain);

module.exports = router;
