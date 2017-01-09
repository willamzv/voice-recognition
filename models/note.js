'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Note = new Schema({
  text: { type:String , required:true },
  completed: Boolean,
  userId: String
})

module.exports = mongoose.model('Note', Note);
