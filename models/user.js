const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    firstName: String,
    lastName: String,
    phone: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
      match:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    },
    password: { type: String, required: true },
    address: { type: String },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
