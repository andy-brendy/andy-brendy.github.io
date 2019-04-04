  $(document).ready(function(){

  	$('.menu-btn').on('click', function() {
  		$(this).toggleClass("menu-on");
  		var nav = $('nav'),
  			navPos = nav.position().left;
  		if (navPos < 0) {
  			nav.animate({left: '0'},300)
  		}
  		else {
  			nav.animate({left: '-200'},300)
  		}
  	});

     $(function() {
      $('nav a').on('click', function(e) {
        $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
          }, 500);
          e.preventDefault();
        });
      });

    $('.feedback .cont').slick({
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: false
    });
    
    $('.order').on('click', function(ev) {
        ev.preventDefault();
        $('.overlay').addClass('show');
      });
      $('.overlay form').on('click', function(event) {
        event.stopPropagation();
      });
      $('.overlay').on('click',function(e) {
        var over = $(this);
        if (over.hasClass('show')) {
          over.removeClass('show');
        }
      });
  });