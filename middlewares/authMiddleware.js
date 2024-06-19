const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");
  console.log("Auth Header:", authHeader);

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided." });
  }

  const token = authHeader.split(" ")[1];
  console.log("Token:", token);

  if (!token) {
    return res.status(401).json({ error: "Failed to authenticate token." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("Token verification error:", error);
    res.status(401).json({ error: "Invalid token." });
  }
};

module.exports = authMiddleware;
