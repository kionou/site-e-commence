const express = require("express");
const controlleurAdmin = require("../controllers/Admin");
const routeAdmin = express.Router();

routeAdmin.get('/',controlleurAdmin.Accueil)
routeAdmin.post('/',controlleurAdmin.AccueilPost)


module.exports=routeAdmin;
