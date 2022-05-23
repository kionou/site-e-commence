let icon = document.querySelector('.search');
let input = document.querySelector('.inputsearch')
console.log(input);

icon.addEventListener('click',(e)=>{
  e.preventDefault();
  icon.style.display='none'
  input.style.display='block'
})
