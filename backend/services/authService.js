const candidatModel = require('../models/candidatModel');
const entrepriseModel = require('../models/entrepriseModel');
const adminModel = require('../models/adminModel');
const { hashPassword, comparePassword } = require('../utils/passwordUtil');
const { generateToken } = require('../utils/jwtUtil');

// Inscription
 
async function registerCandidat(data) {
  const existant = await candidatModel.findByEmail(data.email);
  if (existant) {
    const err = new Error('Cet email est déjà utilisé.');
    err.status = 409;
    throw err;
  }
 
  const motDePasseHash = await hashPassword(data.motDePasse);
  const candidat = await candidatModel.create({ ...data, motDePasseHash });
  return candidat;
}
 
async function registerEntreprise(data) {
  const existant = await entrepriseModel.findByEmail(data.email);
  if (existant) {
    const err = new Error('Cet email est déjà utilisé.');
    err.status = 409;
    throw err;
  }
 
  const motDePasseHash = await hashPassword(data.motDePasse);
  const entreprise = await entrepriseModel.create({ ...data, motDePasseHash });
  return entreprise;
}

// Connexion

async function login(email, motDePasse, role) {
  const modelParRole = {
    candidat: candidatModel,
    entreprise: entrepriseModel,
    admin: adminModel,
  };
 
  const model = modelParRole[role];
  if (!model) {
    const err = new Error('Rôle invalide.');
    err.status = 400;
    throw err;
  }
 
  const utilisateur = await model.findByEmail(email);
  if (!utilisateur) {
    const err = new Error('Email ou mot de passe incorrect.');
    err.status = 401;
    throw err;
  }
 
  const motDePasseValide = await comparePassword(motDePasse, utilisateur.mot_de_passe);
  if (!motDePasseValide) {
    const err = new Error('Email ou mot de passe incorrect.');
    err.status = 401;
    throw err;
  }
 
  const idField = role === 'candidat' ? 'id_candidat'
                : role === 'entreprise' ? 'id_entreprise'
                : 'id_admin';
 
  const token = generateToken({ id: utilisateur[idField], role });
 
  // On ne renvoie jamais le hash du mot de passe au client
  delete utilisateur.mot_de_passe;
 
  return { token, utilisateur };
}
 
module.exports = { registerCandidat, registerEntreprise, login };
 