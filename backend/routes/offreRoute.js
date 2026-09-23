const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middlewares/authmiddleware');
 
// Route publique : tout le monde peut consulter les offres
// router.get('/', offreController.getOffresPubliees);
 
// Route protégée : seule une entreprise connectée peut publier une offre
router.post(
  '/',
  authenticate,
  authorize('entreprise'),
  /* offreController.creerOffre */
  (req, res) => res.json({ message: `Offre créée par l'entreprise ${req.user.id}` })
);
 
// Route protégée : seul un candidat connecté peut postuler
router.post(
  '/:id/postuler',
  authenticate,
  authorize('candidat'),
  /* candidatureController.postuler */
  (req, res) => res.json({ message: `Candidature envoyée par le candidat ${req.user.id}` })
);
 
// Route protégée : seul un admin peut modérer
router.patch(
  '/:id/moderer',
  authenticate,
  authorize('admin'),
  /* moderationController.moderer */
  (req, res) => res.json({ message: `Offre modérée par l'admin ${req.user.id}` })
);
 
module.exports = router;
 