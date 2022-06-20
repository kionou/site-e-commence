const express = require("express");
const session = require("express-session");
const base = require("./others/data");
const router = require("./router/routeAccueil");
const routeAdmin = require("./router/routeAdmin");
const app = express();


base.connect((err) =>{
     if (!err){
            console.log('connexion a la base de donnée'); 
            app.set('view engine','ejs');
            app.set('views','./views');
            app.use('/uploads',express.static('./uploads'))
            app.use(express.static('public'));
            app.use(express.json())
            app.use(express.urlencoded({ extended: false }));
            app.use(session({ 
                    secret: 'keyboard cat',
                    resave: false,
                    saveUninitialized: true,
                    cookie: { maxAge: 60000000000 }}))
            app.use('/',router)
            app.use('/Admin',routeAdmin);
            app.use((req,res,next)=>{
                res
                .status(404)
                .send('ERREUR 404')
            })
    }else{
        
        console.log('connection echec ' + JSON.stringify(err , undefined ,2),err); 
    }
})
    


    














app.listen(8080, ()=>{
    console.log('connecter au port  8080');
})