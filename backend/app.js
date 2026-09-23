
require('dotenv').config();
 
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
 
const authRoute = require('./routes/authRoute');
const offreRoute = require('./routes/offreRoute');
 
const app = express();
 

// Middlewares généraux

app.use(helmet());
app.use(cors());                 
app.use(express.json()); 
 

// Routes

app.get('/', (req, res) => {
  res.json({ message: 'API Plateforme Offres Emploi & Stage — en ligne.' });
});
 
app.use('/api/auth', authRoute);
app.use('/api/offres', offreRoute);
 

// Route inconnue (404)

app.use((req, res) => {
  res.status(404).json({ message: 'Route introuvable.' });
});
 

// Gestionnaire d'erreurs global (filet de sécurité)

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Erreur interne du serveur.' });
});
 

// Démarrage du serveur

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
 
module.exports = app;