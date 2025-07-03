// models/agent.model.js
const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // agent is a type of user
    required: true
  },
  licenseNumber: String,
  phone: String,
  bio: String,
  experience: Number, // in years
  agency: String,
  verified: {
    type: Boolean,
    default: false
  },
  social: {
    website: String,
    linkedin: String,
    facebook: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Agent", agentSchema);
