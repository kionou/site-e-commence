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



$('.container-cadre').slick({
  slidesToShow: 2,
  slidesToScroll: 2
});

var filtered = false;

$('.js-filter').on('click', function(){
  if (filtered === false) {
    $('.filtering').slick('slickFilter',':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.filtering').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }
});