const express = require("express");
const router = express.Router();
const {
  createProperty,
  getProperties,
  updateProperty,
  deleteProperty
} = require("../controllers/property.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

router.get("/", getProperties);                  // Get all properties
router.post("/", authMiddleware, createProperty); // Create new property
router.put("/:id", authMiddleware, updateProperty); // Update property
router.delete("/:id", authMiddleware, deleteProperty); // Delete property

module.exports = router;
