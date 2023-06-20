const mongoose = require('mongoose');
require('dotenv').config();

try{
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  console.log("DB Connected successfully !")
} catch(err) {
  throw new Error(err);
}



