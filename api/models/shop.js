const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  adresse: { type: String, required: false },
  email: { type: String, required: false },
  createdAt: { type: Date, default: Date.now() },
  status: { type: Number, required: false, enum: [1, 0], default: 1 },
});
module.exports = mongoose.model("Shop", schema);
