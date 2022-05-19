const express = require("express");
const controlleur = require("../controllers/AccueilControl");
const router = express.Router()


router.get('/',controlleur.Accueil);
router.get('/detail',controlleur.Detail)
router.get('/connexion',controlleur.Authentification)
router.get('/inscription',controlleur.Registre)
router.get('/cathegorie',controlleur.Cathegorie)
router.get('/panier',controlleur.Panier)






module.exports= router
