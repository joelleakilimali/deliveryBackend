"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/order");
const checkauth = require("../middleware/checkauth");
//const checkAuth = require("../middleware/checkauth");
/**
 * @method: Post
 * @description: save an orders of a specific user
 * @url:http://localhost:3001/basket/:userId
 */
// router.use()
router.post("/make", ordersController.makeOrder);
module.exports = router;
