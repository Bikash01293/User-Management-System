const mongoose = require('mongoose');
require('dotenv').config();

//Connection for the mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});
const db = mongoose.connection;
db.on('connected', () => console.log('Data Db connected'));
db.on('error', () => console.error.bind(console, 'MongoDB connection error:'));
  




