const { request ,response } = require("express");


const controlleur = class{
    static Accueil = (req=request,res=response)=>{
        res.render('nav')

    }
}



module.exports= controlleur;