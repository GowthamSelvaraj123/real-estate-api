const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  type: { type: String, enum: ["house", "apartment", "villa", "plot"], required: true },
  category: { type: String, enum: ["sale", "rent"], required: true },
  bedrooms: Number,
  bathrooms: Number,
  area: Number, // square feet
  location: {
    address: String,
    city: String,
    state: String,
    zipcode: String,
    country: String
  },
  features: [String], // e.g., ["pool", "gym"]
  images: [String],
  listedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  isApproved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Property", propertySchema);
