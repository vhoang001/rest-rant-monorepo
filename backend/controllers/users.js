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

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({
      email,
      password_digest: bcrypt.hashSync(password, 10),
      role: 'reviewer' // Force all new users to be reviewers
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
