const express = require("express");
const router = express.Router();
const { getUserVisits, scheduleList } = require("../controllers/visit.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

router.post("/", authMiddleware, scheduleList);   // Schedule property visit
router.get("/", authMiddleware, getUserVisits);    // Get visits of current user

module.exports = router;
