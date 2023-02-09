const mongoose = require("mongoose");

const basketSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: false },
  ],
  itemNumber: { type: Number, default: 0.0 },
  TotalQuantity: { type: Number, default: 0.0 },
  totalPrice: { type: Number, default: 0.0 },
  paid: { type: Boolean, enum: [true, false], default: false },
  quantity: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now() },
  paidAt: { type: Date },
});
module.exports = mongoose.model("Basket", basketSchema);
