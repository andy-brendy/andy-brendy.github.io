  $(document).ready(function(){
  	

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



	   $('.order').on('click', function(ev) {
        ev.preventDefault();
        $('.overlay-1').addClass('show');
      });
      $('.overlay form').on('click', function(event) {
        event.stopPropagation();
      });
      $('.overlay-1').on('click',function(e) {
        var over = $(this);
        if (over.hasClass('show')) {
          over.removeClass('show');
        }
      });

      $('.order-img').on('click', function(ev) {
        ev.preventDefault();
        $('.overlay-2').addClass('show');
      });
      $('.overlay form').on('click', function(event) {
        event.stopPropagation();
      });
      $('.overlay-2').on('click',function(e) {
        var over = $(this);
        if (over.hasClass('show')) {
          over.removeClass('show');
        }
      });

      $('.btn-action').on('click', function(ev) {
        ev.preventDefault();
        $('.overlay-3').addClass('show');
        var vidLink = $(this).data('vid-link');
        player.loadVideoById({videoId:vidLink});
        playVideo();
      });

      $('.overlay-3').on('click',function(e) {
        var over = $(this);
        if (over.hasClass('show')) {
          over.removeClass('show');
          stopVideo();
        }
      });


      $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        if (formID == "present") {
          setTimeout(function () {
            window.open('http://kalyaginpro.ru/site-new/Kalyagin Production (Видеостудия).pdf')
          },2000);
        }
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {

              $('#' + formID).closest('.overlay').find('h2').text('Сообщение отправлено!');
              $('#' + formID).closest('section').find('h2').text('Сообщение отправлено!');
              setTimeout(function() { 
                $('.overlay').removeClass('show');
                }, 3000);
              
            },
            error: function (jqXHR, text, error) {
                // Вывод сообщения об ошибке отправки
                console.log(error);
                console.log(text);
                
            }
        });
        return false;
    });
      



  });
