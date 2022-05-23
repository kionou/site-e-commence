const { request ,response } = require("express");

const controlleurAdmin = class{
    static Accueil = (req=request,res=response)=>{
        res.render('indexAdmin')

    }
}


module.exports=controlleurAdmin;