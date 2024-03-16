const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    imageUrl: String,
    quantity: {
      type: Number,
      default: 0,
    },
    isAvailable: Boolean,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Product", productSchema);
module.exports.productSchema = productSchema;
