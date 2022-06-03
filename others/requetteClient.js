const base = require("./data");
const bcrypt = require("bcrypt")

const dataBien = class{

    static AfficherCathegorie = () =>{
        return new Promise ((resolve,reject)=>{
            let sql ="SELECT * FROM `cathegorie`;"
            base.query(sql,(error,result)=>{
                if (result) {
                    resolve(result)
                } else {
                    console.log(error);
                    reject(error)   
                }
            })
        })
    }

    static AfficherArticle = () => {
        return new Promise ((resolve,reject)=>{
            let sql ="SELECT * FROM `article`;"
            base.query(sql,(error,result)=>{
                if (result) {
                    resolve(result)
                } else {
                    console.log(error);
                    reject(error)   
                }
            })
        })
    }

    static AfficherUser = () => {
        return new Promise ((resolve,reject)=>{
            let sql ="SELECT * FROM `users`;"
            base.query(sql,(error,result)=>{
                if (result) {
                    resolve(result)
                } else {
                    console.log(error);
                    reject(error)   
                }
            })
        })
    }

    static AfficherListeArticle = (id) => {
        return new Promise ((resolve,reject)=>{
            let sql ="SELECT * FROM `article`  WHERE id_cathegorie = ?;"
            base.query(sql,[id],(error,result)=>{
                if (result) {
                    resolve(result)
                } else {
                    console.log(error);
                    reject(error)   
                }
            })
        })
    }

    static AfficherDetailArticle = (id) => {
        return new Promise ((resolve,reject)=>{
            let sql ="SELECT * FROM `article` WHERE `id` = ?;"
            base.query(sql,[id],(error,result)=>{
                if (result) {
                    resolve(result)
                } else {
                    console.log(error);
                    reject(error)   
                }
            })
        })
    }

      static AfficherNbreArticle = (id) => {
        return new Promise ((resolve,reject)=>{
            let sql ="SELECT COUNT(*)  AS articleCount FROM `article` WHERE `id_cathegorie` = ?;"
            base.query(sql,[id],(error,result)=>{
                if (result) {
                    resolve(result[0])
                } else {
                    console.log(error);
                    reject(error)   
                }
            })
        })
    }

    static AfficherArticleRechercher = (into) => {
        return new Promise ((resolve,reject)=>{
            let sql ="SELECT * FROM `article` WHERE `nom` = ? OR `model` = ?;"
            base.query(sql,[into],(error,result)=>{
                if (result) {
                    resolve(result)
                } else {
                    console.log(error);
                    reject(error)   
                }
            })
        })
    }
     static InsertionArticle = (into,image) => {
             let{ type_produit,nom,model,reseau,dual_sim,ecran,resolution,ram,rom,camera_arriere,camera_avant,systeme_exploitation,connectivite,
               batterie, dimension,date_ajouter,date_update,poids,prix,processeur,id_cathegorie }=into
             console.log('intoo',into);
             console.log('image',image);
             return new Promise ((resolve,reject)=>{
             let sql ="INSERT INTO `article`(`nom`, `prix`, `type_bien`, `model`, `reseau`, `dual_sim`, `ecran`, `resolution`, `ram`, `rom`, `camera_arriere`, `camera_avant`, `systeme_exploitation`, `connectivite`, `processeur`, `dimension`, `poids`, `batterie`, `date_ajouter`, `date_update`, `image`, `id_cathegorie`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
            base.query(sql,[type_produit,nom,model,reseau,dual_sim,ecran,resolution,ram,rom,camera_arriere,camera_avant,systeme_exploitation,connectivite,
                             batterie, dimension,date_ajouter,date_update,poids,prix,processeur,image.path,id_cathegorie],(error,result)=>{

                if (result) {
                    console.log(result);
                    resolve(result)
                } else {
                    console.log(error);
                    reject(error)   
                }
            })
           
        })
    }
    
    static SupprimerArticle = (id) => {
        return new Promise ((resolve,reject)=>{
            let sql ="DELETE FROM `article` WHERE id = ?;"
            base.query(sql,[id],(error,result)=>{
                if (result) {
                    resolve(result)
                } else {
                    console.log(error);
                    reject(error)   
                }
            })
        })
    }

    static VerifUserUniqu = (into)=>{
       return new Promise((resolve,reject)=>{
      let  sqle = "SELECT * FROM `users` WHERE `email`= ? ";
        base.query(sqle,[into],(error,result)=>{
            if (result=='') {
               console.log('bopnjour');
                resolve({message:'success'})
            } else {
                reject({message:'Deja inscrit ,essayé avec une autre adresse mail ! '})
            }
        })
       })

    }
    static InsertionUser = (into)=>{
       
        let password = bcrypt.hashSync(into.password, 10);
        let{nom,prenom,email,numero,date_ajouter,date_update}=into;
        let sql= "INSERT INTO `users`( `nom`, `prenom`, `email`, `numero`, `password`, `date_ajouter`, `date_update`) VALUES (?,?,?,?,?,?,?)";
        base.query(sql,[nom,prenom,email,numero,password,date_ajouter,date_update],(error,result)=>{
            if (result) {
                console.log('resulltte',result);
                return result;
                
            } else {
                console.log('errrorbase',error);
                return error;
            }

        })
    }

    static connectUser = (into) =>{
       return new Promise ((resolve,reject) =>{
        let sql =`SELECT * FROM users WHERE email = ?`;
             base.query(sql,[into.email],(err,result) =>{
            if (result) {
                resolve(result[0])   
            } else {
                reject({message:'Email ou le Mot de passe incorrect !'})   
            }
        })
        })
       
    }

    static UpdateArticle = (into,image) =>{
   
        let{ type_produit,nom,model,reseau,dual_sim,ecran,resolution,ram,rom,camera_arriere,camera_avant,systeme_exploitation,connectivite,
               batterie, dimension,date_ajouter,date_update,poids,prix,processeur,id_cathegorie,id }=into
             console.log('intoo',into);
             console.log('image requette',image);
            
            //  let sql ="UPDATE `article` SET `nom`=?,`prix`=?,`type_bien`=?,`model`=?,`reseau`=?,`dual_sim`=?,`ecran`=?,`resolution`=?,`ram`=?,`rom`=?,`camera_arriere`=?,`camera_avant`=?,`systeme_exploitation`=?,`connectivite`=?,`processeur`=?,`dimension`=?,`poids`=?,`batterie`=?,`date_ajouter`=?,`date_update`=?,`image`=?,`id_cathegorie`=? WHERE id = ?"
            // base.query(sql,[nom,prix,type_produit,model,reseau,dual_sim,ecran,resolution,ram,rom,camera_arriere,camera_arriere,
            //                  systeme_exploitation, connectivite,processeur,dimension,poids,batterie,date_ajouter,date_update,image.path,id_cathegorie,id],(error,result)=>{

            //     if (result) {
            //         console.log(result);
            //         // resolve(result)
            //     } else {
            //         console.log(error);
            //         // reject(error)   
            //     }
            // })
              
    }
    static password = (into)=>{
       return new Promise((resolve,reject)=>{
      let  sqle = "SELECT * FROM `users` WHERE `email`= ? ";
        base.query(sqle,[into],(error,result)=>{
            if (result) {
                resolve(result)
            } else {
                console.log('errrr',error);
                reject(error)
            }
        })
       })

    }

}


module.exports= dataBien;