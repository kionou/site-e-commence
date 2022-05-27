const base = require("./data");

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

}


module.exports= dataBien;