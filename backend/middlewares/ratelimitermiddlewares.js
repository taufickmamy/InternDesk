const rateLimit = require('express-rate-limit');
 
// 10 tentatives de connexion max par IP toutes les 15 minutes
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { message: 'Trop de tentatives de connexion. Réessayez plus tard.' },
  standardHeaders: true,
  legacyHeaders: false,
});
 
module.exports = { loginLimiter };