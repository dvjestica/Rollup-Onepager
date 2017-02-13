// JavaScript Document
$(document).ready(function(){
/* WINDOW RESIZE ACTIONS */
  $(window).resize(function(){
    fullscreen();

  });

/* WINDOW LOAD ACTIONS */

  $(window).load(function(){
    fullscreen();

  });

//fullsize sections
	function fullscreen (){
		$("header").css({
			height: $(window).height() ,
			width: $(window).width()
		});
  }

  // sections slidedown
  $(".welche-berufe-button-01").click(function(){
    $(".hotel-list").fadeIn("slow");
  });
  $(".welche-berufe-button-05").click(function(){
    $(".hotel-list").fadeOut("slow");
  });

  $(".welche-berufe-button-02").click(function(){
    $(".getränke-list").fadeIn("slow");
  });
  $(".welche-berufe-button-06").click(function(){
    $(".getränke-list").fadeOut("slow");
  });

  $(".welche-berufe-button-03").click(function(){
    $(".lebensmittel-list").fadeIn("slow");
  });
  $(".welche-berufe-button-07").click(function(){
    $(".lebensmittel-list").fadeOut("slow");
  });

  $(".welche-berufe-button-04").click(function(){
    $(".haushalt-list").fadeIn("slow");
  });
  $(".welche-berufe-button-08").click(function(){
    $(".haushalt-list").fadeOut("slow");
  });


  $(".banner-button-child").click(function(){
    $("body").animate({
      scrollTop: $(window).height()
    });
  });

  // Hamburger icon
  $("#menu-icon").click(function(){
    $(".menu-side").fadeToggle("slow");
    $(this).toggleClass("active")
  });

  // curent menu item
  $(".bar").click(function(){
    $(".bar").removeClass("active-1");
    $(this).addClass("active-1")
  });


//animated scrolling
	$(".bar a[href^='#']").on('click', function(e) {

// prevent default anchor click behavior
		e.preventDefault();

// store hash
		var hash = this.hash;

//set scroll offset
		var scrollOffset = 0;

// animate
		$('html, body').animate({
		   		scrollTop: $(hash).offset().top - scrollOffset
		   	}, 600, function(){

		  		// when done, add hash to url
		  		window.location.hash = hash;

		  	history.pushState(null, null, hash);
		});
	});





});
