const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserModelSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  isPremium: {
    type: Boolean,
    required: false
  }
});

module.exports = User = mongoose.model("usermodel", UserModelSchema);
