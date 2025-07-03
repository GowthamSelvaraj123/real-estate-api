// models/wishlist.model.js
const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Wishlist", wishlistSchema);
