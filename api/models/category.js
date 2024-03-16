const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchem = new Schema(
  {
    shortId: String,
    name: { type: String, required: true },
    marketId: { type: mongoose.Schema.Types.ObjectId, ref: "Market" },
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Category", categorySchem);
