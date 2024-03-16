const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    shortId: String,
    description: String,
    orederId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    source: {
      type: String,
      enum: ["Cash", "OrangeMoney", "Mpesa"],
      desault: "Cash",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Order", transactionSchema);
