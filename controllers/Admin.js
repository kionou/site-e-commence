const { request ,response } = require("express");
const dataArticle = require("../others/requetteArticle");
const dataCategorie = require("../others/requetteCategorie");
const dataBien = require("../others/requetteClient");


// cote  admin 2 requette restant qui sont update et detail
const controlleurAdmin = class{
    static Accueil = async(req=request,res=response)=>{
         const cathegorie =  await  dataCategorie.AfficherCathegorie()
         const article    =  await dataArticle.AfficherArticle()
         const editer     =  await  dataArticle.AfficherDetailArticle(req.params.id)

         if (cathegorie.success || article.success || editer.success ) {

         res.render('indexAdmin',{article:article.success,cathegorie:cathegorie.success,editer:editer.success})
          
         } 


       
        //  res.render('indexAdmin')
    }

    static AccueilPost = async (req=request,res=response)=>{
      let article = await   dataArticle.InsertionArticle(req.body,req.file)
      if (article.success) {
        res.redirect('/Admin')
      } else {
        res.json(article.erreur)
        
      }

    }

       static PostCathegorie = async (req=request,res=response)=>{
        let categorie = await dataCategorie.InsertionCategorie(req.body)
      if (categorie.success) {
          res.redirect('/Admin')
      } else {
        console.log('error',categorie.erreur);
      }

    }
    static Supprimer = (req=request,res=response)=>{ 
        console.log('ok',req.params.id);  
       dataArticle.SupprimerArticle(req.params.id)
    }

    static Editer = async (req=request,res=response)=>{  
        console.log(req.params.id);
          const cathegorie =  await  dataBien.AfficherCathegorie();
          const article    =  await  dataBien.AfficherArticle();
          const editer     =  await  dataBien.AfficherDetailArticle(req.params.id)
            console.log(article[1].image);
            res.render('indexAdmin',{article:article,cathegorie:cathegorie,editer:editer})
            //  res.json({article:article,cathegorie:cathegorie,editer:editer})

    //   .then(success=>{
    //        res.render('indexAdmin',{success})
    //   })
    //   .catch(error =>{
    //       console.log("error",error);
    //   })
    }
      static EditerPost =  (req=request,res=response)=>{
          console.log('bood',req.body);
          console.log('imagess',req.file);

    //     dataBien.UpdateArticle(req.body,req.file)
    //     .then(success=>{
    //      //    res.render('indexAdmin',{success})
    //    })
    //    .catch(error =>{
    //        console.log("error",error);
    //    })
      
      }
}


module.exports=controlleurAdmin;