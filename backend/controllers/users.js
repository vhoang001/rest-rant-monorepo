const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const password_digest = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password_digest });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
