//require express module
const express = require('express');
//Initiate express
const app = express();
//set port for express server to run on locally
const PORT = process.env.PORT || 3001;

//link apiRoutes and htmlRoutes files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Use express to setup local server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// when you see /api or / call the appropriate js file
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//start server
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
