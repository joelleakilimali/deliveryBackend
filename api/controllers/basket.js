const Basket = require("../models/basket");
const mongoose = require("mongoose");
const Product = require("../models/product");
const Order = require("../models/order");
const user = require("../models/user");

exports.Baskets_get_all = async (req, res, next) => {
  Basket.find()
    .select("_id totalPrice itemNumber product")
    .exec()
    .then((docs) => {
      if (docs) {
        const Baskets = docs;
        res.status(201).json({
          message: "Baskets fetched",
          count: Baskets.length,
          Baskets: Baskets.map((doc) => {
            return {
              _id: doc._id,
              product: doc.product,
              quantity: doc.quantity,
              request: {
                type: "Get",
                url: "http://localhost:3001/Baskets/" + doc._id,
              },
            };
          }),
        });
      }
    })

    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
exports.Basket_create = async (req, res, next) => {
  console.log("basket created");
  const basketo = new Basket({
    _id: new mongoose.Types.ObjectId(),
    user: req.body.userId,
  });
  console.log("--->", basketo);
  basketo.save().then((result) => {
    res.status(200).json({
      message: "Basket created ",
      newBasket: {
        user: result.user,
        _id: result._id,
      },
      request: {
        type: "Get",
        url: "http://localhost:3001/basket/" + result._id,
      },
    });
  });
};

exports.Basket_by_id = async (req, res, next) => {
  Basket.findById(req.params.BasketId)
    .select("product _id quantity")
    .populate("product")

    .then((Basket) => {
      if (!Basket) {
        return res.status(404).json({ message: "Basket not found" });
      }
      res.status(201).json({ Basket });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.Basket_delete = async (req, res, next) => {
  Basket.remove({ _id: req.params.BasketId })
    .exec()
    .then((result) => {
      res.status(201).json({ message: "Basket deleted" });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.getBasketByUser = async (req, res, next) => {
  const theUser = user.findById({ _id: req.params.userId });
  if (!theUser) {
    console.log(theUser);
    return res
      .status(404)
      .json({ message: "there is no basket for this user" });
  } else {
    Order.find({ User: req.params.userId })
      .select("_id product quatity isPaid quantity")
      .populate("product", "name , price ")
      .exec()
      .then((docs) => {
        if (docs) {
          const orders = docs;
          res.status(201).json({
            message: "orders fetched",
            count: orders.length,
            orders: orders.map((doc) => {
              return {
                product: doc.product,
                price: doc.price,
                quantity: doc.quantity,
              };
            }),
          });
        }
      });
  }
};
