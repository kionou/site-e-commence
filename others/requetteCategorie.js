const { Sequelize } = require('../models');
const cat = require('../models/categorie');
const sequelize = require("./data");
const categorie = cat(sequelize,Sequelize);

const dataCategorie = class{

      static InsertionCategorie=  (into)=>{
        console.log('innnto',into);
        // return   users.sync({force:true}).then(()=>{
           let nom = into.nom
            return new Promise(async (next)=>{
               categorie.create({nom})
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
        // }).catch(err=>{
        //     console.log('rrroorr',err);
        // })
      
    }

     static AfficherCathegorie = () =>{

          return new Promise(async (next)=>{
            categorie.findAll().then(resultat => {
                console.log('resultat',resultat);
                next({success:resultat})
            }).catch(error  =>{
                console.log('error',error);
                  next({erreur:error})
            }) 
        })
    }

}


module.exports=dataCategorie