

$(document).ready(function(){
	 $('.menu a').on('click', function(e) {
	 	e.preventDefault();
	      $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top - 60
	        }, 500);
	 });

	new TypeIt('#h1-type', {
	strings: ["в 4 - 5 раз дешевле уже в первые дни", "с помощью официальной <br> таргетированной рекламы"],
	speed: 85,
	breakLines: false,
	nextStringDelay: [1000, 200]
}).go();
	new TypeIt('section > h2, #foot-con h2', {
	speed: 65,
  	waitUntilVisible: true,
  	cursor: false
}).go();

 	particlesJS('particles-js', 
 		{
		  "particles": {
		    "number": {
		      "value": 80,
		      "density": {
		        "enable": true,
		        "value_area": 800
		      }
		    },
		    "color": {
		      "value": "#434343"
		    },
		    "shape": {
		      "type": "circle",
		      "stroke": {
		        "width": 0,
		        "color": "#000000"
		      },
		      "polygon": {
		        "nb_sides": 5
		      },
		      "image": {
		        "src": "img/github.svg",
		        "width": 100,
		        "height": 100
		      }
		    },
		    "opacity": {
		      "value": 0.4,
		      "random": false,
		      "anim": {
		        "enable": false,
		        "speed": 1,
		        "opacity_min": 0.1,
		        "sync": false
		      }
		    },
		    "size": {
		      "value": 3.5,
		      "random": true,
		      "anim": {
		        "enable": true,
		        "speed": 10,
		        "size_min": 0.1,
		        "sync": false
		      }
		    },
		    "line_linked": {
		      "enable": true,
		      "distance": 173.61248115909999,
		      "color": "#393939",
		      "opacity": 0.4,
		      "width": 1
		    },
		    "move": {
		      "enable": true,
		      "speed": 5,
		      "direction": "none",
		      "random": false,
		      "straight": false,
		      "out_mode": "out",
		      "bounce": false,
		      "attract": {
		        "enable": false,
		        "rotateX": 561.194221302933,
		        "rotateY": 1282.7296486924183
		      }
		    }
		  },
		  "interactivity": {
		    "detect_on": "window",
		    "events": {
		      "onhover": {
		        "enable": true,
		        "mode": "bubble"
		      },
		      "onclick": {
		        "enable": false,
		        "mode": "repulse"
		      },
		      "resize": true
		    },
		    "modes": {
		      "grab": {
		        "distance": 304.52895461300443,
		        "line_linked": {
		          "opacity": 0.3784046132458064
		        }
		      },
		      "bubble": {
		        "distance": 97.44926547616143,
		        "size": 10,
		        "duration": 0.8932849335314796,
		        "opacity": 0.3816762897816322,
		        "speed": 3
		      },
		      "repulse": {
		        "distance": 103.89610389610391,
		        "duration": 0.4
		      },
		      "push": {
		        "particles_nb": 4
		      },
		      "remove": {
		        "particles_nb": 2
		      }
		    }
		  },
		  "retina_detect": true
		}
	);

 	//Stick-menu//

 	$(window).scroll(function() {
	    var navElem = $('nav'),
	    	scrPos = $(window).scrollTop(),
	    	txtElem = $('.main-scr .text-block');
	    if($(window).width() > 1000) {
	        if (scrPos >0) {
		      navElem.addClass('scroll');
		      txtElem.css({paddingTop: 137});
		    }
		    else {
		      navElem.removeClass('scroll');
		      txtElem.css({paddingTop: 0});
		    }
	    }
	    else {
	    	navElem.removeClass('scroll');
		     txtElem.css({paddingTop: 0});
	    }
	  });

 	//Opne-menu//

	$('.menu-btn').on('click', function() {
		var ul = $('.main-scr nav .navbar .menu ul');
  		$(this).toggleClass("menu-on");
  		ul.slideToggle();
  	});

	//Send-button//

  	(function () {
	$(document).on('click', '.btn-submit', function() {
		if(!$(this).hasClass('loading')){
			$(this).addClass('loading');
			let self = this;
			
			setTimeout(function() {
				$(self).removeClass('loading');
				$(self).addClass('checked');
			},2000);
			
			setTimeout(function() {
				$(self).removeClass('checked');
			}, 4000);
		}
	});
	})();

	//Services-p.show//

	$('#serv .item').on('click', function () {
		$(this).find('ul').slideToggle(200);
		$(this).find('i').toggleClass('rotate');
	});

	//Slick-lider-settings//

	$('#feed .cont').slick({
		dots: false,
		arrows:true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		swipeToSlide: true,
		waitForAnimate: false,
		responsive: [
		{
			breakpoint: 767,
			settings: {
				arrows:false
			}
		}
		]
	  });

	//Accordian//
	var askContent = $(".faq .content");
		$(".accordion-container a").first().addClass("active")
		.siblings(askContent).slideDown(300);
	 $(".set > a").on("click", function(event) {
	  	event.preventDefault();
	    if ($(this).hasClass("active")) {
	      $(this).removeClass("active");
	      $(this)
	        .siblings(askContent)
	        .slideUp(300);
	      $(".set > a i")
	        .removeClass("minus")
	        .addClass("plus");
	    } else {
	      $(".set > a i")
	        .removeClass("minus")
	        .addClass("plus");
	      $(this)
	        .find("i")
	        .removeClass("plus")
	        .addClass("minus");
	      $(".set > a").removeClass("active");
	      $(this).addClass("active");
	      $(askContent).slideUp(300);
	      $(this)
	        .siblings(askContent)
	        .slideDown(300);
	    }
	  });

	 //Order-button//
	 var over = $('.overlay');
	  $('.order').on('click', function(e) {
	  	e.preventDefault();
	  	over.fadeIn(200);
	  });
	  $(window).on('click', function(e) {
	  	var target = e.target.className;
	  	if (target == "overlay") {
	  		over.fadeOut(100)
	  	}
	  })

	  $('form input[name="phone"]').focus(function() {
	  	var cleave = new Cleave('#phone-top', {
		numericOnly: true,
	    prefix: '+7',
	    delimiters: [" ","(", ")", " ", "-", "-"],
	    blocks: [2, 0, 3, 0, 3, 2, 2]
		});
		var cleave = new Cleave('#phone-modal', {
		numericOnly: true,
	    prefix: '+7',
	    delimiters: [" ","(", ")", " ", "-", "-"],
	    blocks: [2, 0, 3, 0, 3, 2, 2]
		});
		var cleave = new Cleave('#phone-bot', {
		numericOnly: true,
	    prefix: '+7',
	    delimiters: [" ","(", ")", " ", "-", "-"],
	    blocks: [2, 0, 3, 0, 3, 2, 2]
		});
	  });
		
});