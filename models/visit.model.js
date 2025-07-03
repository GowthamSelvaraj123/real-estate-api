// models/visit.model.js
const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property"
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agent"
  },
  scheduledDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "rejected", "completed"],
    default: "pending"
  },
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Visit", visitSchema);
