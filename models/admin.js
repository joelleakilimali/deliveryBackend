const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true,
      unique: true,
      match:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    },
    password: { type: String, required: true },
    marketId: String,
    role: {
      type: String,
      enum: ["Admin", "Delivery"],
      default: "Admin",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Admin", adminSchema);
