  $(document).ready(function(){
  	
  	new WOW().init();

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
	    
	    $('.menu-links-item, a').on('click', function(e) {
	    	$(this).closest('.menu')
	        .removeClass('menu_state_open');
	      $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	        }, 500);
	        e.preventDefault();
	      });
	    });

	  $(".set > a").on("click", function(event) {
	  	event.preventDefault();
	  	var askContent = $(".ask .content");
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

CanvasJS.addCultureInfo("ru", 
    {                      
      months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
      shortMonths: ["Янв", "Фев", "Maр", "Aпр", "Maй", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"]
    });
CanvasJS.addColorSet("customColorSet1",
     [
     "#6495ed",
     "#ffa500",
     "#ff6347",
     "#dc143c",
     "#cf24f2",
    ]); 

var chart1 = new CanvasJS.Chart("chartContainer1",{
	animationEnabled: true,  
	title:{
		text: "Курс Bitcoin 2018 - 2019"
	},
	theme: "dark2",
	culture: "ru",
	backgroundColor: "",
	zoomEnabled: true,
	axisX: {
		tickColor: "purple",
	},
	axisY: {
		valueFormatString: "#0,.",
		suffix: "000",
		prefix: "$",
		gridColor: "purple",
		tickColor: "purple",
		labelFontWeight: "bold",
		interlacedColor: "rgba(175, 175, 175, 0.1)", 
	},
	data: [{
		type: "area",
		color: "rgba(37, 181, 247, 0.8)",
		lineThickness: 3,
		markerSize: 5,
		xValueFormatString: "MMM,YYYY",
		yValueFormatString: "$#,##0",
		dataPoints: [
			{ x: new Date(2018, 1), y: 10313 },
			{ x: new Date(2018, 2), y: 6928 },
			{ x: new Date(2018, 3), y: 9242 },
			{ x: new Date(2018, 4), y: 7492 },
			{ x: new Date(2018, 5), y: 6385 },
			{ x: new Date(2018, 6), y: 7725 },
			{ x: new Date(2018, 7), y: 7017 },
			{ x: new Date(2018, 8), y: 6597 },
			{ x: new Date(2018, 9), y: 6303 },
			{ x: new Date(2018, 10), y: 3971 },
			{ x: new Date(2018, 11), y: 3693 },
			{ x: new Date(2019, 0), y: 3413 },
			{ x: new Date(2019, 1), y: 3596 },
		]
	}]
});
var chart2 = new CanvasJS.Chart("chartContainer2", {
	animationEnabled: true,
	animationDuration: 1750,
	colorSet:  "customColorSet1",
	backgroundColor: "",
	theme: "dark2",
	data: [{
			type: "pie",
			toolTipContent: "#percent %",
			startAngle:  180,
			dataPoints: [
				{  y: 10, indexLabel: "EOS" },
				{  y: 13, indexLabel: "Litecoin" },
				{  y: 20, indexLabel: "Ethereum" },
				{  y: 17, indexLabel: "XRP"},
				{  y: 45, indexLabel: "Bitcoin" }
			]
	}]
});

chart1.render();
chart2.render();

  });