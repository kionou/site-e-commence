const express = require("express");
const { route } = require("express/lib/application");
const controlleur = require("../controllers/AccueilControl");
const router = express.Router()


router.get('/',controlleur.Accueil);
router.get('/detail/:id',controlleur.Detail)
router.get('/connexion',controlleur.Authentification)
router.get('/inscription',controlleur.Registre)
router.get('/cathegorie/:id',controlleur.Cathegorie)
router.get('/panier/:id',controlleur.Panier)
router.get('/commande',controlleur.Commande)
router.get('/rechercher',controlleur.SearchGet)
router.post('/search',controlleur.SearchPost)






module.exports= router
