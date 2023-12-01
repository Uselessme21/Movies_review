const jwt = require('jsonwebtoken');

const User = require('../models/user');

const authenticateToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access denied.');

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id);
    next();
  } catch (error) {
    res.status(401).send('Invalid token.');
  }
};

module.exports = { authenticateToken };
