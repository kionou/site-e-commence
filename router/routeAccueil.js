const express = require("express");
const controlleur = require("../controllers/AccueilControl");
const router = express.Router()


router.get('/',controlleur.Accueil)






module.exports= router
