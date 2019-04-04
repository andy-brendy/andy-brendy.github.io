$(document).ready(function(){
  $('.photos-slider').slick({
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  $(window).scroll(function() {
    var navElem = $('.nav'),
    scrPos = $(window).scrollTop();
    if (scrPos >0) {
      navElem.addClass('nav-scroll');
    }
    else {
      navElem.removeClass('nav-scroll');
    }
  });

  $(function() {
    $('.menu-icon').on('click', function() {
      var nav = $('.nav');
      nav.not('.nav-scroll').addClass('nav-scroll');
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
    });
    
    $('.menu-links-item').on('click', function(e) {
      $(this).closest('.menu')
        .removeClass('menu_state_open');
      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 130
        }, 500);
        e.preventDefault();
      });

    });
});




  

