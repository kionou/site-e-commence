const { request ,response } = require("express");
const dataBien = require("../others/requetteClient");


const controlleurAdmin = class{
    static Accueil = async(req=request,res=response)=>{
         const cathegorie =  await  dataBien.AfficherCathegorie()
         const article    =  await dataBien.AfficherArticle()
            res.json({cathegorie:cathegorie,article:article})

       
        //  res.render('indexAdmin')
    }

    static AccueilPost = (req=request,res=response)=>{
        res.json(req.body)
    }
}


module.exports=controlleurAdmin;