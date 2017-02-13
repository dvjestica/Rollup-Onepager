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

});
