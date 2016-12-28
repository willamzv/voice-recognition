'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Note = new Schema({
  title: Number,
  text: String,
  completed: Boolean,
  userId: String
})

module.exports = mongoose.model('Note', Note);
