const bcrypt = require('bcrypt');
const userService = require('../services/userService');
const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: 'Error retrieving users', error: err });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    } else {
      return res.status(200).json(user);
    }
  } catch (err) {
    return res.status(500).json({ message: 'Error retrieving user', error: err });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { email, password, role, status } = req.body;
    const getUser = await User.findOne({ email });
    if(getUser) {
      return res.status(200).json({ message: 'Email id already registered !' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userService.createUser({ email, password: hashedPassword, role, status });
    return res.status(201).json({ message: `${user.role} has been created !` });
  } catch (err) {
    return res.status(500).json({ message: 'Error creating user', error: err });
  }
};

exports.updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    const user = await userService.updateRoleUser(id, role);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    } else {
      return res.status(200).json({_id: user._id, role: user.role});
    }
  } catch (err) {
    return res.status(500).json({ message: `Error updating user's role`, error: err });
  }
};

exports.updateUserStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const user = await userService.updateUserStatus(id, status);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    } else {
      return res.status(200).json({_id: user._id, status: user.status});
    }
  } catch (err) {
    return res.status(500).json({ message: 'Error updating user', error: err });
  }
};

