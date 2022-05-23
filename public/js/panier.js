const moins = document.querySelector('#decrement');
const plus = document.querySelector('#increment');
const result = document.querySelector('#my-input');

result.disabled = true;
result.style.color = 'black'
plus.addEventListener('click',()=>{
 result.value = parseInt(result.value) + 1;
})

moins.addEventListener('click',()=>{
  result.value = parseInt(result.value) - 1;
  if (result.value<1) {

   result.value=1
  }
 })


let icon = document.querySelector('.search');
let input = document.querySelector('.inputsearch')

icon.addEventListener('click',(e)=>{
  e.preventDefault();
  icon.style.display='none'
  input.style.display='block'
})


function non(){
    location.href = "/panier"
}

function supp(id) {  
    location.href ='/delete/' + id    
}

let modale = document.querySelector('#modal');
let open = document.querySelector('#open');
let closer = document.querySelector('#closer');

open.onclick = function() {
    modale.style.display = "block";
}

closer.onclick = function(e) {
    e.preventDefault()
    modale.style.display = "none";
} 