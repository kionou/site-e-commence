const express = require("express");
const controlleur = require("../controllers/AccueilControl");
const { ValiderRegistre, validerConnection } = require("../middleware/validator");
const router = express.Router();




router.get('/',controlleur.Accueil);
router.get('/detail/:id',controlleur.Detail)
router.get('/connexion',controlleur.Authentification)
router.get('/connexion/:id',controlleur.AuthentificationToken)
router.post('/connexion',validerConnection,controlleur.AuthentificationPost)
router.get('/inscription',controlleur.Registre)
router.post('/inscription',ValiderRegistre,controlleur.RegistrePost)
router.get('/cathegorie/:id',controlleur.Cathegorie)
router.get('/panier',controlleur.Panier)
router.get('/commande',controlleur.Commande)
router.get('/rechercher',controlleur.SearchGet)
router.post('/search',controlleur.SearchPost)
router.post('/passwordOublie',controlleur.PasswordOubliePost)
router.get('/motdepasseoublie',controlleur.PasswordOublieGet);
router.get('/recuperer/:id',controlleur.RecupererPassword)






module.exports= router
