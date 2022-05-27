const { request ,response } = require("express");
const dataBien = require("../others/requetteClient");



const controlleur = class{
    static Accueil = async(req=request,res=response)=>{
        const article =   await dataBien.AfficherArticle() 
        const cathegorie =   await  dataBien.AfficherCathegorie();
        const user =   await  dataBien.AfficherUser();
        res.render('index',{ article:article, cathegorie:cathegorie})
    
    }

    static Detail = (req=request,res=response)=>{
        const id = req.params.id
        dataBien.AfficherDetailArticle(id)
         .then(success =>{
            //  res.json(success)
              res.render('detail',{success})
         })
         .catch(error =>{
             console.log(error);
         })

    }
 
    static Authentification = (req=request,res=response)=>{
        res.render('connexion')

    }

     static Registre = (req=request,res=response)=>{
        res.render('inscription')
    }

     static Cathegorie =async (req=request,res=response)=>{
         const id = req.params.id;
         const liste = await dataBien.AfficherListeArticle(id)
         const nbre = await  dataBien.AfficherNbreArticle(id);
            // res.json(liste)
             res.render('cathegorie',{liste:liste,nombre:nbre})

        //  .then(success =>{
        //     //  res.json(success)
        //      res.render('cathegorie',{success})
        //  })
        //  .catch(error =>{
        //      console.log(error);
        //  })
      
       
    }

    static Panier = (req=request,res=response)=>{
         const id = req.params.id
        dataBien.AfficherDetailArticle(id)
         .then(success =>{
            //  res.json(success)
              res.render('panier',{success})
         })
         .catch(error =>{
             console.log(error);
         })
    }

     static Commande = (req=request,res=response)=>{
        res.render('commande')
    }

    static SearchGet = (req=request,res=response)=>{
        res.render('search')
    }

    static SearchPost = (req=request,res=response)=>{
        console.log(req.body);
        // dataBien.AfficherArticleRechercher(req.body.search)
        // .then(success =>{
        //      res.json(success)
        //     //  res.render('cathegorie',{success})
        //  })
        // .catch(error =>{
        //      console.log(error);
        //  })
    }
}



module.exports= controlleur;