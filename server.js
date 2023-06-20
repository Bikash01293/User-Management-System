const express = require('express');
const passport = require('passport');
const authRoutes = require('./app/routes/authRoutes');
const userRoutes = require('./app/routes/userRoutes');
require('./app/config/database');
require('./app/config/passport');
require('dotenv').config();

//Creating variable for the express function
const app = express();
const port = process.env.PORT;

//Parsing the request body
app.use(express.json());
app.use(passport.initialize());

//Defining the end point for the routes
app.use('/auth', authRoutes);
app.use('/users', passport.authenticate('jwt', { session: false }), userRoutes);

//Starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
