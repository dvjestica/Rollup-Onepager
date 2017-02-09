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


});
