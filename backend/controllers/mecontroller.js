
const candidatModel = require('../models/candidatModel');
const entrepriseModel = require('../models/entrepriseModel');
const pool = require('../config/db');
 
async function getMe(req, res) {
  try {
    const { id, role } = req.user; // injecté par le middleware authenticate
 
    let utilisateur = null;
 
    if (role === 'candidat') {
      utilisateur = await candidatModel.findById(id);
    } else if (role === 'entreprise') {
      utilisateur = await entrepriseModel.findById(id);
    } else if (role === 'admin') {
      const { rows } = await pool.query(
        'SELECT id_admin, nom, email FROM administrateur WHERE id_admin = $1',
        [id]
      );
      utilisateur = rows[0] || null;
    }
 
    if (!utilisateur) {
      return res.status(404).json({ message: 'Utilisateur introuvable.' });
    }
 
    return res.status(200).json({ role, utilisateur });
  } catch (err) {
    return res.status(500).json({ message: 'Erreur serveur.' });
  }
}