const express = require("express");
const router = express.Router();
const { getAllUsers, getUser } = require("../controllers/user.controller");

router.get("/", getAllUsers);           // Get all users
router.get("/:id", getUser);            // Get single user by ID

module.exports = router;
