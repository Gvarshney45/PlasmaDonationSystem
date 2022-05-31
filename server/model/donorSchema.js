const mongoose = require("mongoose");

const donorSchema = mongoose.Schema({
  name: String,
  gender: String,
  age: Number,
  bloodgroup: String,
  positivedate: Date,
  negativedate: Date,
  phone: Number,
  state: String,
  city: String,
});

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;
