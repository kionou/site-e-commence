const { request ,response } = require("express");
const { validationResult } = require("express-validator");
const jsonwt = require("../middleware/jsonwebtoken");
const { mailer, MailerPassword } = require("../middleware/nodemailer");
const dataBien = require("../others/requetteClient");
const bcrypt = require("bcrypt");







const controlleur = class{
    static Accueil = async(req=request,res=response)=>{
        const article    =  await dataBien.AfficherArticle();
        const cathegorie =  await  dataBien.AfficherCathegorie();
        res.render('index',{ article:article, cathegorie:cathegorie})
    
    }

    static Detail = (req=request,res=response)=>{
        const id = req.params.id
        dataBien.AfficherDetailArticle(id)
        .then(success =>{
              res.render('detail',{success})
         })
        .catch(error =>{
             console.log(error);
         })
    }
 
    static Authentification = (req=request,res=response)=>{
        res.render('connexion')
    }
  
    static AuthentificationToken = (req=request,res=response)=>{
        const TokenId = req.params.id;
        const DecodedToken= jsonwt.VerifierToken(TokenId);
              dataBien.InsertionUser(DecodedToken);
             res.redirect('/connexion')
    }

     static AuthentificationPost = (req=request,res=response)=>{
             const result = validationResult(req)
             if (!result.isEmpty() ) {
             const error = result.mapped()
             console.log('rrfrrkrk',error ); 
             res.render('connexion',{alert:error})
        }else{
            dataBien.connectUser(req.body)
            .then(success =>{
                let password = req.body.password;
                let  hash = success.password;
                let  dataUser = {
                       id:success.id, 
                       nom:success.nom 
              }
               let passwordUser = bcrypt.compareSync(password,hash);
                if (  passwordUser){
                  req.session.user= dataUser;
                  console.log('ma session est :',req.session);
                   res.redirect('/')
                } else{
                 res.render('connexion',{alerte:'mot de passe incorrect'}) 
              }
            })
            .catch(error =>{
                console.log("errorrr",error)
                res.render('connexion',{alerte:'Email ou le Mot de passe incorrect !'})
            })
        }
    }

    static Registre = (req=request,res=response)=>{
        res.render('inscription')
    }

    static Cathegorie =async (req=request,res=response)=>{
         const id = req.params.id;
         const liste = await dataBien.AfficherListeArticle(id)
         const nbre =  await  dataBien.AfficherNbreArticle(id);
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
        res.json(req.body);
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
     static RegistrePost = (req=request,res=response)=>{
        const result = validationResult(req)
        if (!result.isEmpty() ) {
             const error = result.mapped()
             console.log('rrfrrkrk',error ); 
             res.render('inscription',{alert:error})
        }
        else{
            dataBien.VerifUserUniqu(req.body.email).then(success=>{
                console.log('ok');
                const token= jsonwt.CreerToken(req.body);
                mailer(req.body.email,token)
                // const show_modal = req.body.modal
                // res.render("inscription",{show_modal})     
            }).catch(error=>{
                console.log('non',error);
                res.render('inscription',{alert:error})
            })
        } 
    }

    static PasswordOublieGet = (req=request,res=response)=>{
        res.render('password')
    }

     static PasswordOubliePost = (req=request,res=response)=>{
         dataBien.password(req.body.email)
        .then(success =>{
            if (success == '') {
              res.render('password',{alert:'Nous n\'avons pas pu retrouver les informations nécessaires,peut-etre avez-vous utilisé un autre e-mail lors de l\'inscription ?'})
            } else {
                 const token= jsonwt.CreerToken(req.body);
                 MailerPassword(req.body.email,token);
                 res.render('password',{alert:'Un email a été envoyé à l\'adresse indiquée.Suivez les instructions pour créer un nouveau mot de passe'})
            }
         
         })
        .catch(error =>{
             console.log(error);
         })
    }

     static RecupererPassword = (req=request,res=response)=>{
        res.render('recupere')
    }
}



module.exports= controlleur;