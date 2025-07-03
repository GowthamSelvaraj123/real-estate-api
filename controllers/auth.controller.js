const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const sendMail = require("../utils/send.mail");

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.staus(400).json({ success: true, message: "User Already Registerd" })
        }
        const user = new User({ name, email, password });
        await user.save();
        await sendMail(email, "Welcome to Real Estate", `Hello ${name}, Welcome!`);
        res.staus(200).json({ success: true, message: "Register Successfully", data: user })
    }
    catch (err) {
        res.staus(500).json({ success: true, message: "Register failed", err })
    }
}
const loginController = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.staus(400).json({ success: true, message: "User not found" })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.staus(200).json({ success: true, message: "Invalid password" })
        }
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
        res.staus(200).json({ success: true, message: "Login Successfully", token: token, data: user })
    }
    catch (err) {
        res.staus(500).json({ success: true, message: "Login failed", err })
    }
}
const forgotController = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.staus(400).json({ success: true, message: "Email not found" })
        }
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "10m" });
        const resetLink = `${process.env.CLIENT_URL || "http://localhost:3000"}/reset-password/${token}`;
        await sendMail(email, "Reset Password", `Click this link to reset your password: ${resetLink}`);
        res.staus(200).json({ success: true, message: "Reset link sent to your email" })
    }
    catch (err) {
        res.staus(500).json({ success: true, message: "Forgot try failed", err })
    }
}
const resetController = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) return res.status(404).json({ message: "Invalid or expired token" });

        user.password = newPassword;
        await user.save();
        res.staus(200).json({ success: true, message: "Reset Password Successfully" })
    }
    catch (err) {
        res.staus(500).json({ success: true, message: "Reset try failed", err })
    }
}
const logoutController = async (req, res) => {
    try {
        res.staus(200).json({ success: true, message: "Logout Successfully" })
    }
    catch (err) {
        res.staus(500).json({ success: true, message: "Logout failed", err })
    }
}

module.exports = { registerController, loginController, logoutController, resetController, forgotController }