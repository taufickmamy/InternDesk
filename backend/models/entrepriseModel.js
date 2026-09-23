const pool = require('../config/db');
 
async function findByEmail(email) {
  const { rows } = await pool.query(
    'SELECT * FROM entreprise WHERE email = $1',
    [email]
  );
  return rows[0] || null;
}
 
async function findById(id) {
  const { rows } = await pool.query(
    'SELECT id_entreprise, nom, secteur_activite, description, site_web, email, logo, adresse, ville FROM entreprise WHERE id_entreprise = $1',
    [id]
  );
  return rows[0] || null;
}
 
async function create({ nom, secteurActivite, description, siteWeb, email, motDePasseHash, adresse, ville }) {
  const { rows } = await pool.query(
    `INSERT INTO entreprise (nom, secteur_activite, description, site_web, email, mot_de_passe, adresse, ville)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING id_entreprise, nom, email`,
    [nom, secteurActivite, description, siteWeb, email, motDePasseHash, adresse, ville]
  );
  return rows[0];
}
 
module.exports = { findByEmail, findById, create };
