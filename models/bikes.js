const mongoose = require('mongoose');

const Bikes = new mongoose.Schema({
  make: String,
  model: String,
  isRented: Boolean,
});

module.exports = new mongoose.model("bikes", Bikes);
