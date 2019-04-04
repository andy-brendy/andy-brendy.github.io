'use strict';



$(".btn.btn-primary").click(function() {
    $( "input[name*='formInfo']" ).val($(this).attr( "data-btn-name" ));
});
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
    //для стилей формы
      var $input = $('.form-fieldset > input');
      $input.blur(function (e) {
        $(this).toggleClass('filled', !!$(this).val());
      });



$(".owl-carousel").owlCarousel({
	loop:true,
	margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});


function homeFullScreen() {

	var homeSection = $('.home');
	var windowHeight = $(window).outerHeight();

	if (homeSection.hasClass('home-fullscreen')) {

		$('.home-fullscreen').css('height', windowHeight);
	}
}

function stickyMenu() {

	var scrollTop = $(window).scrollTop();
	var offset = 0;

	if (scrollTop > offset) {
		$('#navbar').addClass('navbar-small');
	} else {
		$('#navbar').removeClass('navbar-small');
	}
}


$(".policy-btn").click(function() {
  $(".policy").slideDown(300);
});
$(".policy-close").click(function() {
  $(".policy").slideUp(300);
});

function filterPath(string) {
	return string.replace(/^\//, '').replace(/(index|default).[a-zA-Z]{3,4}$/, '').replace(/\/$/, '');
}


//Initialization

homeFullScreen();
new WOW().init();





//What happen on window resize
$(window).resize(function () {
	homeFullScreen();
});

//What happen on window scroll	
$(window).on("scroll", function (e) {
	setTimeout(function () {
		stickyMenu();
	}, 300)
});

$(".owl-carousel img").click(function() {
  $(".over-screen").show();
  var imgSrc = $(this).attr("src");
  $('.over-screen img').attr("src", imgSrc);
  if ($(".over-screen").css('display', 'block')) {
    $(".over-screen").click(function() {
      $(".over-screen").hide();
    });
  };
});
$(".over-screen img").one('load', function() {
  var imgWidth = $('.over-screen img').width();
  var imgPos = $('.over-screen img').position();
  var imgLeft = imgPos.left - imgWidth/2;
  $('.over-screen img').css({left: imgLeft});
});