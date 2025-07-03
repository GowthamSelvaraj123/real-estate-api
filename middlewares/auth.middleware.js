const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// ✅ Basic auth middleware (for logged-in users)
exports.authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Format: Bearer <token>

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) return res.status(401).json({ message: "User not found" });
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

// ✅ Role-based middleware (admin, agent, etc.)
exports.requireRole = (role) => {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    if (req.user.role !== role) return res.status(403).json({ message: `Only ${role} can access this` });
    next();
  };
};
