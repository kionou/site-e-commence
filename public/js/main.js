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

  let icon = document.querySelector('.search');
let input = document.querySelector('.inputsearch')

icon.addEventListener('click',(e)=>{
  e.preventDefault();
  icon.style.display='none'
  input.style.display='block'
})





