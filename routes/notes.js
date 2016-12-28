'use strict';

const express = require('express');
const router = express.Router();
const Note = require('../models/note');

router.get('/', (req, res) => {
  Note.find( { userId: req.user._id }, (err, notes) => {
    res.json(notes);
  });
});

router.post('/', (req, res) => {
  new Note({
    text: req.body.text,
    completed: false,
    userId: req.user._id
  }).save( (err, note) => {
    res.json(note);
  });
})

router.put('/:id', (req, res) => {
  Note.findById(req.params.id, (err, note) => {
    note.completed = !note.completed;
    note.save( (err, note) => {
      res.json(note);
    });
  });
});


router.delete('/:id', (req,res) =>{
  Note.findById(req.params.id, (err, note) =>{
    note.remove();
  });
  res.status(200).send({success:true});
})

module.exports = router;
