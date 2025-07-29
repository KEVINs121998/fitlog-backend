const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith("Bearer")) {
    try {
      token = token.split("")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (err) {
      res.status(401).json({ message: "Token failed" });
    }
  } else {
    res.status(401).json({ message: "No Token" });
  }
};

exports.isTrainer = (req, res, next) => {
  if (req.user && req.user.role === "trainer") {
    next();
  } else {
    res.status(403).json({ message: "Access denied: Trainers only" });
  }
};
