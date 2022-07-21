const { Sequelize } = require('../models');
const articles = require('../models/articles');
const sequelize = require("./data");
const article = articles(sequelize,Sequelize);

const dataArticle = class{

          static InsertionArticle=  (into,images)=>{
              let{ type_produit,nom,model,reseau,dual_sim,ecran,resolution,ram,rom,camera_arriere,camera_avant,systeme_exploitation,connectivite,
               batterie, dimension,poids,prix,processeur,id_cathegorie }=into
             console.log('intoo',into);
             console.log('image',images);
             let image= images.path
        return   article.sync().then(()=>{
            return new Promise(async (next)=>{
               article.create({type_produit,nom,model,reseau,dual_sim,ecran,resolution,ram,rom,camera_arriere,camera_avant,systeme_exploitation,connectivite,
                             batterie, dimension,poids,prix,processeur,image,id_cathegorie})
                .then(resultat=>{
                console.log('ss',resultat);
                next({
                success:resultat
                })
            }).catch(err=>{
                console.log("eee",err);
                next ({
                    erreur:err
                })
            })
        })
        }).catch(err=>{
            console.log('rrroorr',err);
        })
      
    }


     static AfficherArticle = () =>{

          return new Promise(async (next)=>{
            article.findAll().then(resultat => {
                console.log('resultat',resultat);
                next({success:resultat})
            }).catch(error  =>{
                console.log('error',error);
                  next({erreur:error})
            }) 
        })
    }

        static AfficherDetailArticle = (id) => {
            console.log('ididddd',id);
            return new Promise(async (next)=>{
            article.findAll({
                 where: {
                    id:id
             }
            }).then(resultat => {
                console.log('resultat',resultat);
                next({success:resultat})
            }).catch(error  =>{
                console.log('errore',error);
                  next({erreur:error})
            }) 
        })
     
    }

      static AfficherListeArticle = (id) => {
            console.log('ididddd',id);
            return new Promise(async (next)=>{
            article.findAll({
                 where: {
                    id_cathegorie:id
             }
            }).then(resultat => {
                console.log('resultat',resultat);
                next({success:resultat})
            }).catch(error  =>{
                console.log('errore',error);
                  next({erreur:error})
            }) 
        })
     
    }

        static AfficherNbreArticle = (id) => {
      
          return new Promise(async (next)=>{
            article.count({
                 where: {
                    id_cathegorie:id
             }
            }).then(resultat => {
                console.log('resultat',resultat);
                next({success:resultat})
            }).catch(error  =>{
                console.log('errore',error);
                  next({erreur:error})
            }) 
        })
    }

     static SupprimerArticle = (id) => {
         return new Promise(async (next)=>{
            article.destroy({ where: {id} })
            .then(resultat => {
                console.log('resultat',resultat);
                next({success:resultat})
            }).catch(error  =>{
                console.log('errore',error);
                  next({erreur:error})
            }) 
        })

     }

}


module.exports=dataArticle