const authService = require('../services/authService');
const { isEmailValid, isPasswordStrong } = require('../utils/validators');
 
async function registerCandidat(req, res) {
  try {
    const { nom, prenom, email, motDePasse, telephone, ville, niveauEtude } = req.body;
 
    if (!nom || !prenom || !isEmailValid(email)) {
      return res.status(400).json({ message: 'Nom, prénom et email valide sont requis.' });
    }
    if (!isPasswordStrong(motDePasse)) {
      return res.status(400).json({
        message: 'Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre.',
      });
    }
 
    const candidat = await authService.registerCandidat({
      nom, prenom, email, motDePasse, telephone, ville, niveauEtude,
    });
 
    return res.status(201).json({ message: 'Inscription réussie.', candidat });
  } catch (err) {
    return res.status(err.status || 500).json({ message: err.message || 'Erreur serveur.' });
  }
}
 
async function registerEntreprise(req, res) {
  try {
    const { nom, secteurActivite, description, siteWeb, email, motDePasse, adresse, ville } = req.body;
 
    if (!nom || !isEmailValid(email)) {
      return res.status(400).json({ message: 'Nom et email valide sont requis.' });
    }
    if (!isPasswordStrong(motDePasse)) {
      return res.status(400).json({
        message: 'Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre.',
      });
    }
 
    const entreprise = await authService.registerEntreprise({
      nom, secteurActivite, description, siteWeb, email, motDePasse, adresse, ville,
    });
 
    return res.status(201).json({ message: 'Inscription réussie.', entreprise });
  } catch (err) {
    return res.status(err.status || 500).json({ message: err.message || 'Erreur serveur.' });
  }
}
 
// role attendu dans le corps de la requête : 'candidat' | 'entreprise' | 'admin'
async function login(req, res) {
  try {
    const { email, motDePasse, role } = req.body;
 
    if (!isEmailValid(email) || !motDePasse || !role) {
      return res.status(400).json({ message: 'Email, mot de passe et rôle sont requis.' });
    }
 
    const { token, utilisateur } = await authService.login(email, motDePasse, role);
    return res.status(200).json({ message: 'Connexion réussie.', token, utilisateur });
  } catch (err) {
    return res.status(err.status || 500).json({ message: err.message || 'Erreur serveur.' });
  }
}
 
module.exports = { registerCandidat, registerEntreprise, login };
 