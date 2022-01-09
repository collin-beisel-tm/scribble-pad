/*
The following HTML routes should be created:
    GET /notes should return the notes.html file.
    GET * should return the index.html file.
*/
//require the path module for more accurate file system navigation for express router
const path = require('path');
//require the express router module for routes
const router = require('express').Router();

//default get route to home page
//if user navigates to the root url path take them to the index page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
  // get rout to notes.html
  //if the user clicks the get started button or navigates directly to the app/notes url direct them to the notes page
  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  //export all routes
  module.exports = router;