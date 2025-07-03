const express = require("express");
const router = express.Router();
const { sendInquiry } = require("../controllers/inquirey.controller");

router.post("/", sendInquiry);      // Submit inquiry

module.exports = router;