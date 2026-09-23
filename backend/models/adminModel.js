const pool = require('../config/db');
 
async function findByEmail(email) {
  const { rows } = await pool.query(
    'SELECT * FROM administrateur WHERE email = $1',
    [email]
  );
  return rows[0] || null;
}
 
module.exports = { findByEmail };
 