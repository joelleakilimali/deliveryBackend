const mongoose = require("mongoose");
const { productSchema } = require("./product");

const orderSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    shortId: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    marketId: { type: mongoose.Schema.Types.ObjectId, ref: "Market" },
    items: {
      type: [
        {
          name: String,
          quantity: Number,
          price: Number,
        },
      ],
      required: false,
    },
    status: {
      type: String,
      enum: ["Pending", "Canceled", "Delivered", "InCart"],
      default: "InCart",
    },
    paidAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
