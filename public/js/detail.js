console.log('qtdyufyilkjh');



let icon = document.querySelector('.search');
let input = document.querySelector('.inputsearch')

icon.addEventListener('click',(e)=>{
  e.preventDefault();
  icon.style.display='none'
  input.style.display='block'
})


const moins = document.querySelector('#decrement');
const plus = document.querySelector('#increment');
const result = document.querySelector('#input');
let prix = document.querySelector('.prix p span').innerHTML;


let a = 1
plus.addEventListener('click',()=>{
a++
a = (a < 10 ) ? "0" + a :a;
result.innerText = a;

})

moins.addEventListener('click',()=>{

  if (1<a) {
  a--;
  a = (a < 10 ) ? "0" + a :a;
  result.innerText = a;

  }
 })

 
let btn_envoyer = document.querySelector('.ajouter')
let description = document.querySelector('#contenu')
let nom_ar = document.querySelector('.nom_ar')
let prix_ar= document.querySelector('#prix')
let model_ar = document.querySelector('.model_ar')
let image_ar = document.querySelector('.image ')
console.log(image_ar.src);



btn_envoyer.addEventListener('click',(e)=>{
    let articles=[];
    let article ={
    id:btn_envoyer.value,
    nom:nom_ar.innerText,
    model:model_ar.innerText,
    prix:prix_ar.innerText,
    image:image_ar.scr,
    description:description.innerText
    }
     articles.push(article,"1")
   
     console.log("articles",article);


    const ajouterArticle = () =>{
      articleDansLocalstorage.push(articles)
      localStorage.setItem("articles",JSON.stringify(articleDansLocalstorage))
      console.log(articleDansLocalstorage);
}
    

    let articleDansLocalstorage =JSON.parse(localStorage.getItem("articles"));
    if (articleDansLocalstorage) {
       let a = 0
       articleDansLocalstorage.map(el =>{
          if ( el[0].id != article.id) {
                  console.log("art", a);
                  console.log('new article');
                }else{
                    console.log('id identique');
                    console.log(a);
                      a = a+1
                }
         })
          if (a === 0) {
              ajouterArticle()
          }else{
            console.log("zzzzzz",articles.id);
            console.log('articles[1]',articles[1]);
            articles[1] = parseInt(articles[1]) + parseInt(result.innerHTML);
            localStorage.setItem("articles",JSON.stringify(articleDansLocalstorage))
            console.log(  articles);
          }
              
      
    } else {
            articleDansLocalstorage=[];
          ajouterArticle()

    }
})




