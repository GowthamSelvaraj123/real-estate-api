const express = require("express");
const router = express.Router();
const { createAgent, getAgents } = require("../controllers/agent.controller");
router.post("/", createAgent);      // Create agent
router.get("/", getAgents);         // Get all agents

module.exports = router;