const bcrypt = require('bcrypt');
 
const SALT_ROUNDS = 12;
 
async function hashPassword(motDePasse) {
  return bcrypt.hash(motDePasse, SALT_ROUNDS);
}
 
async function comparePassword(motDePasse, hash) {
  return bcrypt.compare(motDePasse, hash);
}
 
module.exports = { hashPassword, comparePassword };