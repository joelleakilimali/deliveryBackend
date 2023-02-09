const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Basket = require("../models/basket");
const multer = require("multer");
//const checkAuth = require("../middleware/checkauth");
const basketController = require("../controllers/basket");

/**
 * @method: Post
 * @description: Create a basket
 * @url : http://localhost:3001/products/
 */

router.post("/", basketController.Basket_create);

router.get("/", basketController.Baskets_get_all);
router.get("/orders/:userId", basketController.getBasketByUser);

module.exports = router;
