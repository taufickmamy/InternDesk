const pool = require('../config/db');
 
async function findByEmail(email) {
  const { rows } = await pool.query(
    'SELECT * FROM candidat WHERE email = $1',
    [email]
  );
  return rows[0] || null;
}
 
async function findById(id) {
  const { rows } = await pool.query(
    'SELECT id_candidat, nom, prenom, email, telephone, ville, niveau_etude, cv, date_inscription FROM candidat WHERE id_candidat = $1',
    [id]
  );
  return rows[0] || null;
}
 
async function create({ nom, prenom, email, motDePasseHash, telephone, ville, niveauEtude }) {
  const { rows } = await pool.query(
    `INSERT INTO candidat (nom, prenom, email, mot_de_passe, telephone, ville, niveau_etude)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING id_candidat, nom, prenom, email, date_inscription`,
    [nom, prenom, email, motDePasseHash, telephone, ville, niveauEtude]
  );
  return rows[0];
}
 
module.exports = { findByEmail, findById, create };
 