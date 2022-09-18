$(function(){
    "use strict";

//  =========blog slider start=======
$('.blog-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  speed:900,
  arrows:false,
  pauseOnHover:false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});
//  =========blog slider end=======

//  =========partners slider start=======
$('.partners-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3200,
  speed:1500,
  arrows:false,
  pauseOnHover:false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});
//  =========partners slider end=======

//  =========sticky menu js start=======
$(window).scroll(function(){
  var top = $(this).scrollTop()
  if(top > 100){
    $(".navbar").addClass("sticky")
  }
  else(
    $(".navbar").removeClass("sticky")
  )
  if(top > 100){
    $(".back-to-top").fadeIn(50)
  }
  else{
    $(".back-to-top").fadeIn(50)
  }
})

$(".back-to-top").click(function(){
  $("html,body").animate({scrollTop: 0},1000)
})
//  =========sticky menu js end=======

  



})