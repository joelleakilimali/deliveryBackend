const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

module.exports = function (req, res, next) {
  // Get the token from Header
  const token = req.header("authorization").split(" ")[1];
  console.log(token);
  // check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token,authorization denied" });
  }

  // Verify the token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    console.log("Testing auth...");
    req.user = decoded.user;
    const user_id = decoded.id;
    console.log(req.user);

    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
