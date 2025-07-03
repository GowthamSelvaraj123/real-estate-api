const express = require("express");
const router = express.Router();
const { registerController, loginController, logoutController, resetController, forgotController } = require("../controllers/auth.controller");

// 🔐 Public Routes
router.post("/register", registerController);              // Create user and send welcome mail
router.post("/login", loginController);                    // Login and get JWT token
router.post("/logout", logoutController);                  // Just return a logout message (frontend deletes token)
router.post("/forgot-password", forgotController); // Send reset password email
router.post("/reset-password", resetController);   // Reset password using token

module.exports = router;
