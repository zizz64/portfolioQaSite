$(document).ready(function(){
	$('#menu-btn').click(function(){
		$('#menu__nav_mob').toggleClass('hidden visible');
	});
});

$(document).ready(function(){
	$('#close__menu_mob').click(function(){
		$('#menu__nav_mob').toggleClass('hidden visible');
	});
});

$(document).ready(function(){
	$('.menu__item').click(function(){
		$('#menu__nav_mob').toggleClass('hidden visible');
	});
});

$(".main__link").click(function() { 
    $('html, body').animate({
    scrollTop: $(".main").offset().top   
    }, 1000); 
   });

   $(".about__link").click(function() { 
    $('html, body').animate({
    scrollTop: $(".about").offset().top    
    }, 1000); 
   });

   $(".skills__link").click(function() { 
    $('html, body').animate({
    scrollTop: $(".skills").offset().top      
    }, 1000); 
   });

   $(".contact__link").click(function() {
    $('html, body').animate({
    scrollTop: $(".footer__content").offset().top   
    }, 1000); 
   });

   $("#arrowup").click(function() { 
    $('html, body').animate({
    scrollTop: $(".main").offset().top   
    }, 500); 
   });

   