const bcrypt = require('bcrypt');
const User = require('../models/user');
const { generateAccessToken } = require('../utils/auth');

exports.register = async (req, res) => {
  try {
    const { email, password, role, status } = req.body;
    const getUser = await User.findOne({ email });
    if(getUser) {
      return res.status(200).json({ message: 'Email id already registered !' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword, role, status });
    return res.status(201).json({ message: `${user.role} has been created !` });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(user.role === 'User') {
      return res.status(200).json({status: user.status});
    }
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    } else {
      const token = generateAccessToken(user);
      return res.status(200).json({ token });
    }
  } catch (err) {
    return res.status(500).json({ message: 'Error logging in', error: err });
  }
};
