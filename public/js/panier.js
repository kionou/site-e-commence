// const moins = document.querySelector('#decrement');
// const plus = document.querySelector('#increment');






let icon = document.querySelector('.search');
let input = document.querySelector('.inputsearch')

icon.addEventListener('click',(e)=>{
  e.preventDefault();
  icon.style.display='none'
  input.style.display='block'
})


function non(id){
    location.href = "/panier/" + id
}

function supp(id) {  
    location.href ='/delete/' + id    
}




    let articleDansLocalstorage =JSON.parse(localStorage.getItem("articles"));
    console.log(articleDansLocalstorage);
    let panier =document.querySelector('.panier')
    let panierr = document.querySelector('.panier-content')
   

    if (articleDansLocalstorage === null) {
        panier.innerHTML=`
         <p>Le panier est vide !</p>
        `
    } else {
       articleDansLocalstorage.forEach(articleDansLocalstorage => {
           panier.innerHTML +=`
                    <div class="panier-content">
                <div class="detail">
                    <div class="image">
                    ${articleDansLocalstorage[0].image}
                        <img src="/images/4.webp" alt="">
                    </div>
                    <div class="nomBien">
                        <p>${articleDansLocalstorage[0].description} </p>
                        <div class="supp">
                            <button class=""><i class="fas fa-trash"></i> supprimer</button>
                        </div>
                    </div>
                </div>
                <div class="prix">
                    <p><span>${articleDansLocalstorage[0].prix} </span> F CFA</p>
                    <div class="quantite">
                        <button id="decrement" onclick="decrementer()"> - </button>
                        <span id="input">01</span>
                        <button id="increment" onclick="incrementer()"> + </button>
                    </div>
                </div>
            </div>
           `
 
       });
    }



// let modale = document.querySelector('#modal');
// let open = document.querySelector('#open');
// let closer = document.querySelector('#closer');

// open.onclick = function() {
//     modale.style.display = "block";
// }

// closer.onclick = function(e) {
//     e.preventDefault()
//     modale.style.display = "none";
// } 
 const result = document.querySelectorAll('#input');
 const nbreArticle = document.querySelector('#article span');
 const prix = document.querySelector('.prix p span').innerText;
 const prix_article = document.querySelector('.prix_article')
 
let a = 1;

 let b =prix_article.innerHTML = prix;
 
function incrementer() { 
 let b =prix_article.innerHTML = prix;
    let c = 0 
    a++
    a = (a < 10 ) ? "0" + a :a;
    result.forEach(el => {
        el.innerText = a
    });
    nbreArticle.innerText = a;
    c= parseInt(b) * a
    prix_article.innerText= c;
}

function decrementer() {  
  if (1<a) {
  a--;
  a = (a < 10 ) ? "0" + a :a;
  result.innerText = a;
  nbreArticle.innerText = a;
  b--
  prix_article.innerText = prix_article.innerText - prix;
    
  }  
}