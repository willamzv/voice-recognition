'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema({
  name: {type: String, required: true},
  email: String,
  userId: String
})

module.exports = mongoose.model('Contact', Contact);
