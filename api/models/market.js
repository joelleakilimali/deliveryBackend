const mongoose = require("mongoose");
const { Schema } = mongoose;

const marketchema = new Schema(
  {
    shortId: String,
    name: { type: String, required: true },
    imageUrl: String,
    slogan: {
      type: String,
      default: "",
    },
    phoneNumber: { type: String, required: false },
    email: { type: String, required: false },
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Market", marketchema);
