const moins = document.querySelector('#decrement');
const plus = document.querySelector('#increment');
const result = document.querySelector('#my-input');

// result.disabled = true;
// result.style.color = 'black'
   
//     plus.addEventListener('click',()=>{
//     result.value = parseInt(result.value) + 1;
// })
    



// moins.addEventListener('click',()=>{
//   result.value = parseInt(result.value) - 1;
//   if (result.value<1) {

//    result.value=1
//   }
//  })


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

let modale = document.querySelector('#modal');
let open = document.querySelector('#open');
let closer = document.querySelector('#closer');

// open.onclick = function() {
//     modale.style.display = "block";
// }

// closer.onclick = function(e) {
//     e.preventDefault()
//     modale.style.display = "none";
// } 

    let articleDansLocalstorage =JSON.parse(localStorage.getItem("articles"));
    console.log(articleDansLocalstorage);
    let panier =document.querySelector('.panier')
    let panierr = document.querySelector('.panier-content')
    console.log(panier);

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
                        <p>${articleDansLocalstorage[0].description}</p>
                        <div class="supp">
                            <button class=""><i class="fas fa-trash"></i> supprimer</button>
                        </div>
                    </div>
                </div>
                <div class="prix">
                    <p>${articleDansLocalstorage[0].prix} F CFA</p>
                    <div class="quantite">
                        <button id="decrement" onclick=""> - </button>
                        <input type="number" min="0" max="100" step="5" value="2" id="my-input" readonly>
                        <button id="increment" onclick=""> + </button>
                    </div>
                </div>
            </div>
           `
           console.log('articleDansLocalstorage',articleDansLocalstorage[0]);
       });
    }