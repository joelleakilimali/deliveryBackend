const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true,
    match:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  },
  password: { type: String, required: true },
  noms: { type: String },
  prenom: { type: String },
  telephone: { type: String },
  adresse: { type: String },
});
module.exports = mongoose.model("User", userSchema);
