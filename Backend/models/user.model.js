const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [3, "First name must be at least 3 characters long"],
  },
  lastName: {
    type: String,
    minlength: [3, "Last name must be at least 3 characters long"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, "Email must be at least 3 characters long"],
  },
  password: {
    type: String,
    required: true,
    select: false, //hide password from response
  },
  socketId: {
    type: String,
  },
});
// Methods

// Hide password when sending JSON
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
