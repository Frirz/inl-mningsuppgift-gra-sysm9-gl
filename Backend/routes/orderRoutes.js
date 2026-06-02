const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");
const { createOrder, getOrder } = require("../controllers/orderController");

router.post("/", validateToken, createOrder);
router.get("/", validateToken, getOrder);

module.exports = router;