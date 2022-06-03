const express = require("express");
const controlleurAdmin = require("../controllers/Admin");
const upload = require("../middleware/multer");
const routeAdmin = express.Router();


routeAdmin.get('/',controlleurAdmin.Accueil)
routeAdmin.post('/',upload.single('image'),controlleurAdmin.AccueilPost)
routeAdmin.get('/delete/:id',controlleurAdmin.Supprimer)
routeAdmin.get('/:id',controlleurAdmin.Editer)
routeAdmin.post('/editer',upload.single('image'),controlleurAdmin.EditerPost)


module.exports=routeAdmin;
