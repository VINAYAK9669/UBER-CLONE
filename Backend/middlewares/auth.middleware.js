const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decodedToken._id);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleware;
