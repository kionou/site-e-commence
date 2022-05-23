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

 let cathegorie = document.querySelector('.cathegorie-content');
 console.log(cathegorie);
