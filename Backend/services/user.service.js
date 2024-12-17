const userModel = require("../models/user.model");
const user = require("../models/user.model");

module.exports.createuser = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  if (!firstName || !lastName || !email || !password) {
    throw new Error("All fields are required");
  }
  const user = userModel.create({
    firstName,
    lastName,
    email,
    password,
  });
  return user;
};
