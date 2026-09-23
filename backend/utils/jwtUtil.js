const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');
 
function generateToken(payload) {
  // payload conseillé : { id, role }  role = 'candidat' | 'entreprise' | 'admin'
  return jwt.sign(payload, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
}
 
function verifyToken(token) {
  return jwt.verify(token, jwtConfig.secret);
}
 
module.exports = { generateToken, verifyToken };
 