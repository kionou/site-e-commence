const { request ,response } = require("express");
const dataBien = require("../others/requetteClient");

// cote  admin 2 requette restant qui sont update et detail
const controlleurAdmin = class{
    static Accueil = async(req=request,res=response)=>{
         const cathegorie =  await  dataBien.AfficherCathegorie()
         const article    =  await dataBien.AfficherArticle()
         const editer     =  await  dataBien.AfficherDetailArticle(req.params.id)

         res.render('indexAdmin',{article:article,cathegorie:cathegorie,editer:editer})

       
        //  res.render('indexAdmin')
    }

    static AccueilPost = (req=request,res=response)=>{
        dataBien.InsertionArticle(req.body,req.file)
        res.json(req.body)

    }
    static Supprimer = (req=request,res=response)=>{ 
        console.log('ok',req.params.id);  
    //   dataBien.SupprimerArticle(req.params.id)
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