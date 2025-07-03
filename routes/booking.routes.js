const express = require("express");
const router = express.Router();
const { createBooking, getBookings } = require("../controllers/booking.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

router.post("/", authMiddleware, createBooking);   // Book property
router.get("/", authMiddleware, getBookings);      // View bookings

module.exports = router;
