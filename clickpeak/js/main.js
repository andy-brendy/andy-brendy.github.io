  $(document).ready(function(){
  	new WOW().init();
    $('.has-animation').each(function(index) {
    $(this).delay($(this).data('delay')).queue(function(){
      $(this).addClass('animate-in');
    });
    });

    $('.main-scr .cont .img-block').animate({opacity: 1}, 2500);

    var winWidth = $(window).width(),
    navElem = $('.nav'),
    logoImg = $('#logoImg'),
    menuLinks = $('.menu-links-item'),
    mainScreen = $('#main-head-img').offset(),
    burger = $('.menu-icon span'),
    servicesScreen = $('.benefits').offset(),
    casesScreen = $('#cases').offset(),
    checkScreen = $('.check').offset(),
    eduScreen = $('.edu').offset(),
    formSimpleScreen = $('.form-simple').offset(),
    zayavkaTop = $('.case-btn-block.zayavka-btn .case-btn');
    
    $(window).scroll(function() {
      scrPos = $(window).scrollTop();
      console.log(servicesScreen.top);
      console.log(menuLinks);
      navElem.addClass('nav-scroll');
      if (scrPos > servicesScreen.top && scrPos < checkScreen.top + 100 ) {
        logoImg.attr('src','img/ico/logo.png');
        menuLinks.css('color', '#000');
        burger.css('background', '#000');
        zayavkaTop.css({'color' : '#000', "border-color" : "#383838"});
      }
      else if (scrPos > eduScreen.top && scrPos < formSimpleScreen.top + 120 ){
        logoImg.attr('src','img/ico/logo.png');
        menuLinks.css('color', '#000');
        burger.css('background', '#000');
        zayavkaTop.css({'color' : '#000', "border-color" : "#383838"});
      }
      else {
        logoImg.attr('src','img/ico/logo-white.png');
        menuLinks.css('color', '#fff');
        burger.css('background', '#fff');
        zayavkaTop.css({'color' : '#ffe9c9' , "border-color" : "#ffe9c9"});
      }
    });

	
  
    var menuBg = $('.nav');
	  $(function() {
	    $('.menu-icon').on('click', function() {
	      $(this).closest('.menu')
	        .toggleClass('menu_state_open');
	    });
	    
	    $('.menu-links-item').on('click', function(e) {
	    	$(this).closest('.menu')
	        .removeClass('menu_state_open');
	      $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top - 50
	        }, 500);
	        e.preventDefault();
	      });
	    });
    $('.serv-more').click(function(e) {
        $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
          }, 500);
          e.preventDefault();
    });



	   

      var show = true;
      var countbox = ".benefits__inner";
      $(window).on("scroll load resize", function () {
          if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
          var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
          var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
          var w_height = $(window).height(); // Высота окна браузера
          var d_height = $(document).height(); // Высота всего документа
          var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
          if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
              $('.benefits__number').css('opacity', '1');
              $('.benefits__number').spincrement({
                  thousandSeparator: "",
                  duration: 1200
              });

              show = false;
          }
      });

     $('.owl-carousel').owlCarousel({
          loop:true,
          margin:0,
          responsiveClass:true,
          responsive:{
              0:{
                  items:2,
                  nav:true
              },
              600:{
                  items:3,
                  nav:false
              },
              1000:{
                  items:6,
                  nav:true,
                  loop:false
              }
          }
      });

      $("#caseModalForm, #free-consultation, #zayavkaModalForm").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {

              $('#' + formID).find('.success').text('Сообщение отправлено!');
              
            },
            error: function (jqXHR, text, error) {
                // Вывод сообщения об ошибке отправки
                console.log(error);
                console.log(text);
                
            }
        });
        return false;
    });

 window.onload = function () { 
    // проверяем поддерживает ли браузер FormData 
    if(!window.FormData) {
      alert("Браузер не поддерживает загрузку файлов на этом сайте");
    }
  }


  // =validation
  var errorTxt = 'Ошибка отправки';
  $("#brief-form").validate({
    submitHandler: function(form, event){
        event.preventDefault();
      var form = document.forms['brief-form'],
        formData = new FormData(form),
        xhr = new XMLHttpRequest();

      xhr.open("POST", "https://clickpeak.ru/mail-brief.php");
      
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if(xhr.status == 200) {
            $("#brief-form").html('<p class="thank">Данные отправлены. Мы очень скоро свяжемся с вами!<p>');
          }
        }
      };
      xhr.send(formData);
    }
  }); 
      
function fitElementToParent(el, padding) {
  var timeout = null;
  function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, {scale: 1});
    var pad = padding || 0;
    var parentEl = el.parentNode;
    var elOffsetWidth = el.offsetWidth - pad;
    var parentOffsetWidth = parentEl.offsetWidth;
    var ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
  }
  resize();
  window.addEventListener('resize', resize);
}

var sphereAnimation = (function() {

  var sphereEl = document.querySelector('.sphere-animation');
  var spherePathEls = sphereEl.querySelectorAll('.sphere path');
  var pathLength = spherePathEls.length;
  var hasStarted = false;
  var aimations = [];



  var breathAnimation = anime({
    begin: function() {
      for (var i = 0; i < pathLength; i++) {
        aimations.push(anime({
          targets: spherePathEls[i],
          stroke: {value: ['rgb(255, 220, 169)', 'rgba(80,80,80,.35)'], duration: 500},
          translateX: [2, -4],
          translateY: [2, -4],
          easing: 'easeOutQuad',
          autoplay: false
        }));
      }
    },
    update: function(ins) {
      aimations.forEach(function(animation, i) {
        var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
        animation.seek(animation.duration * percent);
      });
    },
    duration: Infinity,
    autoplay: false
  });

  var introAnimation = anime.timeline({
    autoplay: false
  })
  .add({
    targets: spherePathEls,
    strokeDashoffset: {
      value: [anime.setDashoffset, 0],
      duration: 3900,
      easing: 'easeInOutCirc',
      delay: anime.stagger(190, {direction: 'reverse'})
    },
    duration: 2000,
    delay: anime.stagger(60, {direction: 'reverse'}),
    easing: 'linear'
  }, 0);

  var shadowAnimation = anime({
      targets: '#sphereGradient',
      x1: '25%',
      x2: '25%',
      y1: '0%',
      y2: '75%',
      duration: 30000,
      easing: 'easeOutQuint',
      autoplay: false
    }, 0);

  function init() {
    introAnimation.play();
    breathAnimation.play();
    shadowAnimation.play();
  }
  
  init();

})();
  });
