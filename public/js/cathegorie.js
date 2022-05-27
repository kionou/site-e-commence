let icon = document.querySelector('.search');
let input = document.querySelector('.inputsearch')

icon.addEventListener('click',(e)=>{
  e.preventDefault();
  icon.style.display='none'
  input.style.display='block'
})

let cathegorie = document.querySelector('.cathegorie-content').children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const page=document.querySelector(".page-num");
const maxItem=6;
let index=1;
 
 const pagination=Math.ceil(cathegorie.length/maxItem);
 console.log(pagination)

 prev.addEventListener("click",function(){
   index--;
   check();
   showItems();
 })
 next.addEventListener("click",function(){
     index++;
     check();
   showItems();  
 })

 function check(){
      if(index==pagination){
          next.classList.add("disabled");
      }
      else{
        next.classList.remove("disabled");	
      }

      if(index==1){
          prev.classList.add("disabled");
      }
      else{
        prev.classList.remove("disabled");	
      }
 }

 function showItems() {
      for(let i=0;i<cathegorie.length; i++){
         cathegorie[i].classList.remove("show");
         cathegorie[i].classList.add("hide");


         if(i>=(index*maxItem)-maxItem && i<index*maxItem){
            // if i greater than and equal to (index*maxItem)-maxItem;
           // means  (1*8)-8=0 if index=2 then (2*8)-8=8
           cathegorie[i].classList.remove("hide");
           cathegorie[i].classList.add("show");
         }
         page.innerHTML=index;
      }

          
 }

 window.onload=function(){
     showItems();
     check();
 }

let texte = document.querySelectorAll('#text')
console.log(texte);
texte.forEach(text =>{
  truncateString(text.innerHTML,30,text)
});
function truncateString(str,num,el) {
  if (str.length <= num) {
    return el.innerHTML =str;
  } else {
    return el.innerHTML = str.slice(0,num).concat('...')
  }
}