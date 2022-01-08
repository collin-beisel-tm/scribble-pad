/*
The following HTML routes should be created:
    GET /notes should return the notes.html file.
    GET * should return the index.html file.
*/
const path = require('path');
const router = require('express').Router();

//default get route to home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
  // get rout to notes.html
  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  module.exports = router;