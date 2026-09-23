
const { verifyToken } = require('../utils/jwtUtil');
 
function authenticate(req, res, next) {
  const header = req.headers['authorization'];
  const token = header && header.startsWith('Bearer ') ? header.split(' ')[1] : null;
 
  if (!token) {
    return res.status(401).json({ message: 'Token manquant. Veuillez vous connecter.' });
  }
 
  try {
    const payload = verifyToken(token); // { id, role, iat, exp }
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token invalide ou expiré.' });
  }
}
 
// Usage : authorize('entreprise'), authorize('candidat', 'admin')
function authorize(...rolesAutorises) {
  return (req, res, next) => {
    if (!req.user || !rolesAutorises.includes(req.user.role)) {
      return res.status(403).json({ message: 'Accès refusé pour ce rôle.' });
    }
    next();
  };
}
 
module.exports = { authenticate, authorize };