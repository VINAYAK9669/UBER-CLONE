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
    .withMessage("Color must be at least 3 characters long "),
  body
    .apply("vehicle.plate")
    .isLength({ min: 3 })
    .withMessage("Model must be at least 3 characters long "),
  body.apply("vehicle.capacity").isLength({ min: 1 }),
  body
    .apply("vehicle.vehicleType")
    .isIn(["car", "motorcycle", "auto"])
    .withMessage("Invalid vehicle type"),
];

module.exports = {
  registerValidation,
};
