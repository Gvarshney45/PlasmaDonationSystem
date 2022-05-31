const mongoose = require('mongoose');
const requestSchema=mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
    bloodgroup: String,
    positivedate: Date,
    phone: Number,
    state : String,
    city : String

});

const Requester=mongoose.model('Requester',requestSchema);

module.exports = Requester;