const express = require("express");
const {
    registerCandidat,
    registerEntreprise,
    login
} = require("../controllers/authcontroller");

const router = express.Router();

router.post("/register/candidat", registerCandidat);

router.post("/register/entreprise", registerEntreprise);

router.post("/login", login);

router.get("/profile", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Accès autorisé à la page de profil"
    });
});

module.exports = router;