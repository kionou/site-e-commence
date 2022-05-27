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
let prix = document.querySelector('.prix p span').innerHTML;


result.disabled = true;
result.style.color = 'black'

plus.addEventListener('click',()=>{
 result.value = parseInt(result.value) + 1;
 prix = prix * result.value;
console.log(prix);

})

moins.addEventListener('click',()=>{
  result.value = parseInt(result.value) - 1;
  if (result.value<1) {

   result.value=1
  }
 })


