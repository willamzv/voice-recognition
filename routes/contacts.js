const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.get('/', (req, res) => {
  Contact.find( { userId: req.user._id }, (err, contacts) => {
    res.json(contacts);
  });
});

router.post('/', (req, res) => {
  new Contact({
    name: req.body.name,
    email: req.body.email,
    userId: req.user._id
  }).save( (err, contact) => {
    res.json(contact);
  });
})

// router.put('/:id', (req, res) => {
//   Contact.findById(req.params.id, (err, note) => {
//     note.completed = !note.completed;
//     note.save( (err, note) => {
//       res.json(note);
//     });
//   });
// });


router.delete('/:id', (req,res) =>{
  Contact.findById(req.params.id, (err, contact) =>{
    contact.remove();
  });
  res.status(200).send({success:true});
})

module.exports = router;
