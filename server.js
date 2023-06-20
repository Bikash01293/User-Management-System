const express = require('express');
const passport = require('passport');
const authRoutes = require('./app/routes/authRoutes');
const userRoutes = require('./app/routes/userRoutes');
require('./app/config/database');
require('./app/config/passport');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(passport.initialize());

app.use('/auth', authRoutes);
app.use('/users', passport.authenticate('jwt', { session: false }), userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
