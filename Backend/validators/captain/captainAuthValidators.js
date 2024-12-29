const { body } = require("express-validator");

const registerValidation = [
  body("firstName")
    .isLength({ min: 3 })
    .withMessage("First name must be at least 3 characters long"),
  body("lastName")
    .isLength({ min: 3 })
    .withMessage("Last name must be at least 3 characters long"),
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("vehicle.color")
    .isLength({ min: 3 })
    .withMessage("Color must be at least 3 characters long"),
  body("vehicle.plate")
    .isLength({ min: 3 })
    .withMessage("Plate must be at least 3 characters long"),
  body("vehicle.capacity")
    .isInt({ min: 1 })
    .withMessage("Capacity must be at least 1"),
  body("vehicle.vehicleType")
    .isIn(["car", "motorcycle", "auto"])
    .withMessage("Invalid vehicle type"),
];

// Login Validations

const loginValidation = [
  body("email").isEmail().withMessage("Email is Invalid"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

module.exports = {
  registerValidation,
  loginValidation,
};
