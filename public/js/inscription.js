let icon = document.querySelector('.search');
let input = document.querySelector('.inputsearch')
console.log(input);

icon.addEventListener('click',(e)=>{
  e.preventDefault();
  icon.style.display='none'
  input.style.display='block'
})

let date_ajout = document.querySelectorAll('#date_ajour');
console.log(date_ajout);
date_ajout.forEach(date_ajout=>{
date_ajout.valueAsDate = new Date();
console.log(date_ajout.value);
})


let connexion = document.querySelector('.container');
let MotPasse = document.querySelector('.Container');
let password = document.querySelector('.password');

password.addEventListener('click',(e) =>{
  e.preventDefault();
  connexion.style.display='none';
  MotPasse.style.display='flex'
})
