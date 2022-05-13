const { request ,response } = require("express");


const controlleur = class{
    static Accueil = (req=request,res=response)=>{
        res.render('index')

    }

    static Detail = (req=request,res=response)=>{
        res.render('detail')

    }
}



module.exports= controlleur;