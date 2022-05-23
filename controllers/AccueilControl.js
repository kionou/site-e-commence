const { request ,response } = require("express");


const controlleur = class{
    static Accueil = (req=request,res=response)=>{
        res.render('index')

    }

    static Detail = (req=request,res=response)=>{
        res.render('detail')

    }
 
    static Authentification = (req=request,res=response)=>{
        res.render('connexion')

    }

     static Registre = (req=request,res=response)=>{
        res.render('inscription')
    }

     static Cathegorie = (req=request,res=response)=>{
        res.render('cathegorie')
    }

    static Panier = (req=request,res=response)=>{
        res.render('panier')
    }

     static Commande = (req=request,res=response)=>{
        res.render('commande')
    }
}



module.exports= controlleur;