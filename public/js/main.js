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



// $('.container-cadre').slick({
// slidesToShow: 2,
//   slidesToScroll: 1
// });

// var filtered = false;

// $('.js-filter').on('click', function(){
//   if (filtered === false) {
//     $('.container-cadre').slick('slickFilter',':even');
//     $(this).text('Unfilter Slides');
//     filtered = true;
//   } else {
//     $('.container-cadre').slick('slickUnfilter');
//     $(this).text('Filter Slides');
//     filtered = false;
//   }
// });



// $('.container-cadre').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.container-cadre').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });



// $('.container-cadre').slick({
//   slidesToShow: 2,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 6000,
//   infinite:true
// });


$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});