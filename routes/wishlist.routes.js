const express = require("express");
const router = express.Router();
const { addToWishlist, getWishlist } = require("../controllers/wishlist.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

router.post("/", authMiddleware, addToWishlist);  // Add to wishlist
router.get("/", authMiddleware, getWishlist);     // Get wishlist items

module.exports = router;
