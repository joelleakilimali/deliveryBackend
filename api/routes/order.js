const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/order");
const checkauth = require("../middleware/checkauth");
//const checkAuth = require("../middleware/checkauth");

/**
 * @method: GET
 * @description: get all the orders
 * @url : http://localhost:3001/orders/
 */

router.get("/", checkauth, ordersController.orders_get_all);

/**
 * @method: GET
 * @description: get all the orders for a user
 * @url : http://localhost:3001/orders/
 */

router.post("/:userId", ordersController.orders_get_all_user);

/**
 * @method: Post
 * @description: create an orders
 * @url : http://localhost:3001/orders/
 */

router.post("/", ordersController.createOrder);

/**
 * @method: GET
 * @description: get a specific order
 * @url : http://localhost:3001/orders/:orderId
 */

router.get("/:orderId", ordersController.order_by_id);

router.patch("/:ordertId", (req, res, next) => {
  res.status(201).json({ message: "order details" });
});

/**
 * @method: Delete
 * @description: delete a specific order
 * @url : http://localhost:3001/orders/:orderId
 */

router.delete("/:orderId", ordersController.order_delete);
module.exports = router;
