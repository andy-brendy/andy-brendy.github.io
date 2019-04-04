
(function($) {

	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};




	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();


	var carousel = function() {
	
		$('.product-slider').owlCarousel({
			autoplay: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dots: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
		$('.carousel-testimony').owlCarousel({
			autoplay: false,
			loop: true,
			items:1,
			margin: 200,
			stagePadding: 0,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			mouseDrag: true,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 1
				}
			}
		});

	};
	carousel();

var navHeig = $('.ftco_navbar').height();
$('body').css('margin-top', navHeig);
	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var st = $(this).scrollTop(),
				nav = $('.navbar');

				if (st > 0){
					nav.css('position', 'fixed');
					
				}
				else {
					nav.css('position', 'absolute');
				}
		});
	};
	scrollWindow();



	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();

 var SmthScrl = function() {
 	$("#call-to-action").click(function(e) {
 		e.preventDefault();
 		var offTop = $("#section-counter").offset().top;
 		$("html, body").animate({scrollTop: offTop - 50}, 500);
 	});
 };
 SmthScrl();


$("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        var message = $(formNm).find(".msgs"); // Ищес класс .msgs в текущей форме  и записываем в переменную
        var formTitle = $(formNm).find(".formTitle"); // Ищес класс .formtitle в текущей форме и записываем в переменную
        $.ajax({
            type: "POST",
            url: '../mail.php',
            data: formNm.serialize(),
            success: function (data) {

              
              window.location.href = "/thx.html";
            },
            error: function (jqXHR, text, error) {
                // Вывод сообщения об ошибке отправки
                message.html(error);
                formTitle.css("display","none");
                // $(formNm).css("display","none");
                setTimeout(function(){
                  //$(formNm).css("display","block");
                  $('.formTitle').css("display","block");
                  $('.msgs').html('');
                  $('input').not(':input[type=submit], :input[type=hidden]').val('');
                }, 3000);
            }
        });
        return false;
    });


})(jQuery);

