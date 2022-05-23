const express = require("express");
const router = require("./router/routeAccueil");
const routeAdmin = require("./router/routeAdmin");

const app = express()



app.set('view engine','ejs');
app.set('views','./views')
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false })) ;
app.use('/',router)
app.use('/Admin',routeAdmin)
    














app.listen(8080, ()=>{
    console.log('connecter au port  8080');
})