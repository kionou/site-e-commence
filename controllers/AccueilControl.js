const { request ,response } = require("express");
const { validationResult } = require("express-validator");
const jsonwt = require("../middleware/jsonwebtoken");
const { mailer, MailerPassword } = require("../middleware/nodemailer");
const bcrypt = require("bcrypt");
const dataArticle = require("../others/requetteArticle");
const dataCategorie = require("../others/requetteCategorie");



const controlleur = class{
    static Accueil = async(req=request,res=response)=>{
        const article    =  await dataArticle.AfficherArticle();
        const cathegorie =  await  dataCategorie.AfficherCathegorie();
        res.render('index',{ article:article.success, cathegorie:cathegorie.success})
    
    }

    static Detail = async  (req=request,res=response)=>{
        const id = req.params.id
        console.log('idd',id);
      let article = await  dataArticle.AfficherDetailArticle(id)
       if (article.success) {
              res.render('detail',{success:article.success})
        
       } else {
            console.log('articles ',article.erreur);
       }
       
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
         const liste = await dataArticle.AfficherListeArticle(id)
         const nbre =  await  dataArticle.AfficherNbreArticle(id);
             res.render('cathegorie',{liste:liste.success,nombre:nbre.success}) 
    }

    static Panier = (req=request,res=response)=>{
         const id = req.params.id
         res.render('panier')

        //  dataBien.AfficherDetailArticle(id)
        //  .then(success =>{
        //  })
        //  .catch(error =>{
        //      console.log(error);
        //  })
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
          
              
                 const token= jsonwt.CreerToken(success);
                 MailerPassword(req.body.email,token);
                 res.render('password',{alert:'Un email a été envoyé à l\'adresse indiquée.Suivez les instructions pour créer un nouveau mot de passe'})
            }
         
         })
        .catch(error =>{
             console.log(error);
         })
    }

     static RecupererPassword = (req=request,res=response)=>{
             const TokenId = req.params.id;
              const DecodedToken= jsonwt.VerifierToken(TokenId);
              console.log("dededede",DecodedToken[0].id);
             res.render('recupere',{user:DecodedToken[0]})
            // res.render('recupere')
            // res.json(DecodedToken)
    }

     static RecupererPasswordPost = (req=request,res=response)=>{
            console.log('tftjhduk',req.body);
            const result = validationResult(req)
             if (!result.isEmpty()){
             const error = result.mapped()
             console.log('rrfrrkrk',error ); 
             res.render('recupere',{alert:error})
             }else{
                 console.log('requette',req.body);
               dataBien.ModifierPassword(req.body)
        //    .then(success =>{
        //      res.json(success)
        //     //  res.render('cathegorie',{success})
        //  })
        // .catch(error =>{
        //      console.log(error);
        //  })

             }

        // res.render('recupere')
    }

     static erreur404 = (req=request,res=response)=>{
        res.render('erreur')
    }
}



module.exports= controlleur;