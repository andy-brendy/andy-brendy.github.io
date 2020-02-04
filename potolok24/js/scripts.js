$(function(){
	var $body = $('body'),
		pageClass = $body.attr('class'),
		popup = $('.popup'),
		dark = $('.dark'),
		cssActive = '_active',
		cssHover = '_hover',
		cssDisable = '_disable',
		cssFocus = '_focus',
		cssHide = '_hide',
		cssOpen = '_open',
		cssError = '_error'
	;
	
	// Animation
	(function(){
		$('.advantages li span, .lights__plus li, .printing__plus li').addClass('hidden').viewportChecker({
			classToAdd: 'visible animated zoomIn',
			offset: 200
		});
		$('.catalog__nav li, .contact__item').addClass('hidden').viewportChecker({
			classToAdd: 'visible animated flipInX',
			offset: 200
		});
		/*$('.project__item').addClass('hidden').viewportChecker({
			classToAdd: 'visible animated fadeIn',
			offset: 200
		});*/
		$('.banner._n2 .img, .banner._n3 .img, .banner._n4 .img, .banner._n5 .img').addClass('hidden').viewportChecker({
			classToAdd: 'visible animated fadeInLeft',
			offset: 500
		});
	})();
	
	
	//Project Slider
		$('.project_slider').slick({
        infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
      });
	  
	  //Project Slider
		/*$('.prtfolio-slider').slick({
        infinite: true,
  slidesToShow: 4,
  slidesToScroll: 3
      });*/
	// Menu
	(function(){
		var nav = $('.head__nav'),
			lastId,
			menuItems = nav.find('a'),
			scrollItems = menuItems.map(function(){
				var item = $($(this).attr('href'));
				if (item.length) { return item; }
			})
		;
		
		nav.on('click', 'a', function(e){
			e.preventDefault();
			var href = $(this).attr('href'),
				offsetTop = href === "#" ? 0 : $(href).offset().top-45
			;
			
			if(href == '#contacts'){
				offsetTop = offsetTop + 500;
			}
				
			$('html, body').stop().animate({
				scrollTop: offsetTop
			}, 500);
		});
		
		$(window).scroll(function(){
			var fromTop = $(this).scrollTop()+91;
			var cur = scrollItems.map(function(){
				if ($(this).offset().top < fromTop) return this;
			});
			cur = cur[cur.length-1];
			var id = cur && cur.length ? cur[0].id : '';
			if (lastId !== id){
				lastId = id;
				menuItems.removeClass(cssActive).filter('[href=#'+id+']').addClass(cssActive);
			}
		});
		
		$(document).ready(function(){
			var nav = $.getUrlVar('nav'),
				id = $.getUrlVar('id'),
				cat = $('.catalog__wrap'),
				catNav = $('.catalog__nav'),
				offsetTop = nav === "#" ? 0 : $(nav).offset();
			console.log(offsetTop);
			cat.find('.catalog__hide').fadeOut(0);
			$(id).fadeIn(300);
			catNav.find('li').removeClass(cssActive);
			catNav.find('li[data-href='+id+']').addClass(cssActive);
			$('html, body').stop().animate({
				scrollTop: offsetTop
			}, 500);
		});
		
		$.extend({
			getUrlVars: function(){
				var vars = [], hash;
				var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
				for(var i = 0; i < hashes.length; i++){
					hash = hashes[i].split('=');
					vars.push(hash[0]);
					vars[hash[0]] = hash[1];
				}
				return vars;
			},
			getUrlVar: function(name){
				return $.getUrlVars()[name];
			}
		});
	})();
	
	// Form + popup
	(function(){
		var popup = $('.js-popup'),
			dark = $('.js-dark'),
			btnOpen = $('.js-open'),
			btnClose = $('.js-close')
		;
		
		btnOpen.on('click', function(e){
			e.preventDefault();
			var item = $(this),
				href = item.attr('href')
			;
			
			if(href == '#light'){
                $(href).find('.lights__cat').load('lights.html');
            }
			dark.addClass(cssActive);
			closePopup();
			$(href).addClass(cssActive);
		});
		
		btnClose.on('click', function(){
			closePopup();
		});
		
		function closePopup(){
			dark.removeClass(cssActive);
			popup.removeClass(cssActive);
		}
		
		$('.f_phone').mask('(999) 999-99-99');
		
		$('.js-form').submit(function(stop) {
            stop.preventDefault();
            var form = $(this),
				type = form.find('.f_type').val(),
				formBtn = form.find('.btn'),
                formId = form.parent().attr('id')
			;
			
            form.find('.required').each(function() {
                $(this).removeClass(cssError);
            });

            formBtn.attr('disabled', true);
            $.ajax({
                type: form.attr('method'),
                url: '../validate.php',
                data: form.serialize(),
                dataType: "json",
                success: function(data){
					console.log(data);
                    if (data.result == 'success') {
                    	window.onload = function(){
                    		yaCounter48244739.reachGoal('LEAD');
                    	};
						if(type == 'calc'){
							form.html('<h6><span>Спасибо!</span><br>Ваша заявка принята.</h6><p class="_after">Наш специалист свяжется с вами, чтобы ответить на ваши вопросы.</p>');
						} else {
							form.html('<h4><span>Спасибо!</span><br>Ваша заявка принята.</h4><p>Наш специалист свяжется с вами, чтобы ответить на ваши вопросы.</p>');
						}
                        if (formId == 'call' || formId == 'feed') {
                            setTimeout(closePopup, 3500);
                        }
                    } else {
                    	formBtn.attr('disabled', false);
                        for (var errorField in data.text_error) {
                            form.find('.' + errorField).addClass(cssError);
                        }
                    }
                }
            });
        });
	})();
	
	// Tabs
	(function(){
		var oneDays = new Date().getTime() + 102400000;
		var threeDays = new Date().getTime() + 302400000;
		var fiveDays = new Date().getTime() + 452400000;
		$('#countdown1').countdown(threeDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>дней</li>' + '<li><span>%H</span><br>часов</li>' + '<li><span>%M</span><br>минут</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown2').countdown(oneDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>дней</li>' + '<li><span>%H</span><br>часов</li>' + '<li><span>%M</span><br>минут</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
		$('#countdown3').countdown(fiveDays, function(event){$(this).html(event.strftime('<li><span>%D</span><br>дней</li>' + '<li><span>%H</span><br>часов</li>' + '<li><span>%M</span><br>минут</li>' + '<li><span class="_red">%S</span><br>секунд</li>'));});
	})();
	
	// Catalog
	(function(){
		var catNav = $('.catalog__nav li'),
			catDiv = $('.catalog__hide')
		;
		
		catNav.on('click', function(){
			var href = $(this).data('href');
			
			catNav.removeClass(cssActive);
			$(this).addClass(cssActive);
			catDiv.fadeOut(0);
			$(href).fadeIn(300);
		});
	})();
	
	// Calc
	(function(){
		var calc = $('.calc__wrap__cell');
		
		calc.on('keyup', 'input', function(){
			var f_area = $('.AREA').val(),
				f_angle = $('.ANGLE').val(),
				f_lights = $('.LIGHTS').val(),
				f_summ = $('.SUMM'),
				price = calc.find('.price'),
				summ
			;
			
			summ = f_area !== '' && f_area !== 0 ? (f_area*480) + (f_angle*400) + (f_lights*350) : 0;
			f_summ.val(summ);
			price.find('span').html(summ);
		});
	})();
	
	// Reviews
	(function(){
		/*$('.reviews').owlCarousel({
			center: false,
			merge: false,
			loop: true,
			items: 1,
			margin: 0,
			nav: true,
			dots: false
		});*/
		$('.slider.pc').owlCarousel({
			center: false,
			merge: false,
			loop: true,
			/*animateOut: 'fadeOut',
			animateIn: 'fadeIn',*/
			animateOut: 'zoomOutDown',
			animateIn: 'zoomInDown',
			mouseDrag: false,
			touchDrag: false,
			pullDrag: false,
			autoplay: true,
			/*autoplayTimeout: 6000,*/
			autoplayTimeout: 10000,
			items: 1,
			margin: 0,
			nav: false,
			dots: true
		});
	})();
	
	// Portfolio
	(function(){
		
		
		$('.portfolio').mixItUp({
			animation: {
				duration: 300,
				effects: 'fade',
				easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
			}
		});
		$('.filter__item').on('click', function(){
			var cls = $(this).data('filter');
			$('.portfolio').find('a').attr('rel', 'gall');
			if(cls !== 'all'){
				$('.portfolio').find('a'+cls).attr('rel', 'gallActive');
			}
		});
		$('.js-gall').on('click', function(){
			var rel = $(this).attr('rel');
			$('a[rel='+rel+']').fancybox({
				padding: 0,
				margin: 0,
				cyclic: true,
				centerOnScroll: true,
				overlayShow: true,
				transitionIn: 'fade',
				easingIn: 'swing',
				helpers: {
					overlay: {
						locked: false
					}
				}
			});
		});
	})();
	
	$(window).load(function () {
		$('#one').trigger('click');
		$('#two').trigger('click');
	});
	
	// Map
	(function(){
		ymaps.ready(init);
		var myMap,
			myPlacemark
		;
		
		function init(){
			myMap = new ymaps.Map("map", {
				center: [55.752662, 37.621347],
				zoom: 9,
				controls: ['zoomControl', 'fullscreenControl']
			});
			myPlacemark1 = new ymaps.Placemark([55.813754, 37.785], {
				hintContent: 'г. Москва, ул. Амурская, 15/1, стр. 1.'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/point.png',
				iconImageSize: [66, 86],
				iconImageOffset: [-33, -86]
			});
			myPlacemark2 = new ymaps.Placemark([55.505424, 37.572504], {
				hintContent: 'г. Щербинка, Симферопольское шоссе, 6/10'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/point.png',
				iconImageSize: [66, 86],
				iconImageOffset: [-33, -86]
			});
			myPlacemark3 = new ymaps.Placemark([55.582009, 37.710791], {
				hintContent: 'г. Москва, МКАД, 25-й километр, вл.4'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/point.png',
				iconImageSize: [66, 86],
				iconImageOffset: [-33, -86]
			});
			myPlacemark4 = new ymaps.Placemark([55.654726, 37.281432], {
				hintContent: 'г. Одинцово, ул. Внуковская, 11, СК "Акос" пав. М-2'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/point.png',
				iconImageSize: [66, 86],
				iconImageOffset: [-33, -86]
			});
			myPlacemark5 = new ymaps.Placemark([55.827888, 37.308592], {
				hintContent: 'г. Красногорск, микрорайон Губайлово, д.53. Строительный рынок «Стройдвор», павильон Сантехника'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/point.png',
				iconImageSize: [66, 86],
				iconImageOffset: [-33, -86]
			});
			myPlacemark6 = new ymaps.Placemark([55.453069, 37.782557], {
				hintContent: 'г. Домодедово, мкрн. Центральный, "Домодедовский торговый двор", 2, пав. В-35'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/point.png',
				iconImageSize: [66, 86],
				iconImageOffset: [-33, -86]
			});
			myPlacemark7 = new ymaps.Placemark([55.748874, 37.886083], {
				hintContent: 'г. Балашиха, мкрн. Салтыковка, Носовихинское ш, вл4с2, СК «Никольский» Павильон 11.120'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/point.png',
				iconImageSize: [66, 86],
				iconImageOffset: [-33, -86]
			});
			myPlacemark8 = new ymaps.Placemark([55.696384, 37.960541], {
				hintContent: 'г. Люберцы, ул. Вертолетная, д. 46 "Дом быта"'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/point.png',
				iconImageSize: [66, 86],
				iconImageOffset: [-33, -86]
			});
			myPlacemark9 = new ymaps.Placemark([55.545787, 37.721051], {
				hintContent: 'г. Видное, ул. Березовая, д.1 ТК «Красный камень» Второй этаж, павильон 1/3У'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/point.png',
				iconImageSize: [66, 86],
				iconImageOffset: [-33, -86]
			});
			myPlacemark10 = new ymaps.Placemark([55.740259, 38.000111], {
				hintContent: 'г. Железнодорожный, ул. Поликахена, д.1 магазин "Строймаркет"'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/point.png',
				iconImageSize: [66, 86],
				iconImageOffset: [-33, -86]
			});

			myMap.geoObjects.add(myPlacemark1);
			myMap.geoObjects.add(myPlacemark2);
			myMap.geoObjects.add(myPlacemark3);
			myMap.geoObjects.add(myPlacemark4);
			myMap.geoObjects.add(myPlacemark5);
			myMap.geoObjects.add(myPlacemark6);
			myMap.geoObjects.add(myPlacemark7);
			myMap.geoObjects.add(myPlacemark8);
			myMap.geoObjects.add(myPlacemark9);
			myMap.geoObjects.add(myPlacemark10);

			myMap.behaviors.disable('scrollZoom');
		}
	})();
	// alert();
	$('.head__nav').slicknav({
		label: ''
	});
	$('.slider.mobile').slick({
		 dots: true,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1
		  // adaptiveHeight: true
	});
	$('.slicknav_nav a').click(function(){
		$(this).parents('.slicknav_menu').find('.slicknav_btn').click()
	})

	// if($('.portfolio.mobile').length) {
	// 		var w = 0;
	// 		$('.portfolio.mobile a').each(function(){
	// 			w += $(this).width()+parseInt($(this).css('padding-right'));
	// 			// console.log(w);
	// 		});
	// 		$('.portfolio.mobile').css({'width' : w+'px'});
	// 		$('.portfolio.mobile').wrap('<div class="over-wrap"></div>');
	// 		$('.over-wrap').livequery(function(){
	// 			$(this).jScrollPane();
	// 		})
	// 	}

});