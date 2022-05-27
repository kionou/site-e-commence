// const navToggle = document.querySelector(".navbar_toggle");
// const links = document.querySelector(".main_nav");

// navToggle.addEventListener('click', function(){
//     links.classList.toggle("show_nav");
// })


$('.content-slick').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    // autoplay: true,
    cssEase: 'linear'
  });

 

  new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
    slidesToShow: 4,
    draggable: true,
     autoplay: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },{
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },{
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },{
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },{

        breakpoint: 550,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        }
      },{
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },{
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

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

let icon = document.querySelector('.search');
let input = document.querySelector('.inputsearch')
let formulaire= document.querySelector('.formulaire')
icon.addEventListener('click',(e)=>{
  e.preventDefault();
  icon.style.display='none'
  input.style.display='block'
})
// input.addEventListener('input',(e)=>{
//   e.preventDefault()

//   console.log('rrrrr');
// console.log(e.target.value);


// })


// input.addEventListener('input',async (e)=>{
//   e.preventDefault()
 

//   const url = 'http://localhost:8080/search';
//   let data = new FormData(formulaire)
//   let dataSerialized = Object.fromEntries(data);
//   const jsonObject = {...dataSerialized,
//     sendToSelf : dataSerialized.sendToself ? true : false,

// }
//   console.log('dataSerialized',jsonObject);

// try {
//  const response =  await fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(jsonObject),
//     headers: { 
//        'content-type': 'application/json'
//     }
//      });
//      const json = await response.json()
//      console.log(json);
// } catch (e) {
//     console.log('errr',e);
// }

// })





