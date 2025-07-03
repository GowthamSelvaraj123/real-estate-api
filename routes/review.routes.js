const express = require("express");
const router = express.Router();
const { createReview, getReviews } = require("../controllers/review.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

router.post("/", authMiddleware, createReview);   // Submit review
router.get("/:propertyId", getReviews);           // Get reviews for property

module.exports = router;
