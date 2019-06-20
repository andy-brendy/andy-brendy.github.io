$(document).ready(function(){
  $('.clients').slick({
  	infinite: true,
  	slidesToShow: 5,
  	slidesToScroll: 1,
  	arrows: true,
  	responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      },
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
  ]
  });
  $('.statis').slick({
  	infinite: false,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	arrows: false,
  	dots: true,
  	responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
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

             $( ".overlay form" ).hide( 500, function() {
                $(".thx").show(500);
            });
             function resetForm() {
              setTimeout(function(){
                $(".thx").hide(300);
                $( ".overlay form" ).show(300);
              }, 3000);
            }
              
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

      // Get the modal
      var modal = document.getElementById('myModal');
      var modalTwo = document.getElementById('myModal1');
      // Get the image and insert it inside the modal - use its "alt" text as a caption
      var img = document.getElementsByClassName('myImg');
      var modalImg = document.getElementById("img01");
      $('.myImg').on('click', function(event, slick, direction){
        modal.style.display = "block";
        modalImg.src = this.src;
      });
      // Get the <span> element that closes the modal
      var modalWrap = document.getElementsByClassName("modal")[0];
      var modalWrapTwo = document.getElementsByClassName("modal")[1];
      // When the user clicks on <span> (x), close the modal
      modalWrap.onclick = function(e) {
        if (e.target !== modalImg) {
          modal.style.display = "none";
        }
      };
      $('.sogl-link').on('click', function(event, slick, direction){
        event.preventDefault();
        modalTwo.style.display = "block";
      });
      var soglTxt = document.getElementsByClassName("sogl")[0];
      modalWrapTwo.onclick = function(e) {
        if (e.target !== soglTxt) {
          modalTwo.style.display = "none";
        }
      };

});