const User = require('../models/user');

exports.getAllUsers = async () => {
  const users = await User.find();
  return users;
};

exports.getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

exports.createUser = async ({email, password, role, status}) => {
  const user = await User.create({ email, password, role, status });
  return user;
};

exports.updateRoleUser = async (id, role) => {
  const user = await User.findByIdAndUpdate(
    id,
    { role },
    { new: true }
  );
  return user;
};

exports.updateUserStatus = async (id, status) => {
  const user = await User.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );
  return user;
};

exports.deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);
  return user;
};
