  $(document).ready(function(){

    new WOW().init();

     $(function() {
    $('.menu-icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
    });
    
    $('.menu-links-item').on('click', function(e) {
      $(this).closest('.menu')
        .removeClass('menu_state_open');
      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        e.preventDefault();
      });
    });

     var containerEl = document.querySelector('.catalog .blocks');

      var mixer = mixitup(containerEl, {
      	load: {
      		filter: '.category-a'
      	}
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

    $('.lightzoom').lightzoom({
    	isOverlayClickClosing: true,
    	speed: 200
    });

    
  });