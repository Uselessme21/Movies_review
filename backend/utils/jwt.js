const jwt = require('jsonwebtoken');


const generateToken = async(payload) => {
 const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
 return token
};

module.exports = { generateToken };
