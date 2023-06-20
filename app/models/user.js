const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['Super Admin', 'Admin', 'User'] },
    status: { type: String, enum: ['Active', 'Deactive', 'Unverified'] },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
