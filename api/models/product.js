const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  shop: { type: mongoose.Schema.Types.ObjectId, ref: "Shop" },

  name: { type: String, required: true },
  price: { type: Number, required: true },
  productImage: { type: String, required: true },
  dateExp: { type: String, required: true },

  category: {
    type: String,
    required: false,
    enum: ["ELECTRONIC", "Boisson", "FOOD", "Perfum", "OTHER", "Detergent"],
    dfault: "Food",
  },
  status: {
    type: String,
    required: false,
    enum: ["AVAILABLE", "OUT_OF_STOCK"],
    default: "AVAILABLE",
  },
});
module.exports = mongoose.model("Product", productSchema);
