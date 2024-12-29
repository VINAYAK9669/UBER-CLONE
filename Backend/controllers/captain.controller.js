// iMPORTs
const { validationResult } = require("express-validator");
const captainModel = require("../models/Captain.model");
const captainService = require("../services/captain.service");
const blacklistToken = require("../models/blacklistToken.model");

const registerCaptain = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });

    if (isCaptainAlreadyExist) {
      return res.status(400).json({ message: "Captain already exists" });
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    await captain.save();
    const token = await captain.generateAuthToken();

    res
      .status(201)
      .json({ message: "Captain registered successfully", captain, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginCaptain = async (req, res) => {
  try {
    errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email });

    if (!captain) {
      return res.status(404).json({ message: "Captain not found" });
    }

    const isMatch = await captain.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    } else {
      const token = await captain.generateAuthToken();

      res.cookie("token", token);

      res.status(200).json({ message: "Login successful", captain, token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getCaptainProfile = async (req, res) => {
  try {
    res.status(200).json(req.captain);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Todo: Logout the user
const logoutCaptain = async (req, res) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  await blacklistToken.create({ token });

  res.status(200).json({ message: "User logged out successfully" });
};

module.exports = {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
  logoutCaptain,
};
