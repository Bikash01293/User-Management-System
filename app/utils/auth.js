const jwt = require('jsonwebtoken');
require('dotenv').config();

//Authentication middleware
exports.authenticateRole = (roles) => (req, res, next) => {
  const { role } = req.user;
  if (roles.includes(role)) {
    next();
  } else {
    res.status(403).json({ message: `${role} is Unauthorized` });
  }
};

//Generating the jwt token
exports.generateAccessToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
    role: user.role,
    status: user.status,
  };
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '24h' });
};
