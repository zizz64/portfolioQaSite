$(document).ready(function(){
	$('#menu-btn').click(function(){
		$('#menu__nav_mob').toggleClass('hidden visible');
        $('html').addClass('hidden-overflow');  
        $('.arrowups').toggleClass('visible hidden');       
	});
});

$(document).ready(function(){
	$('#close__menu_mob').click(function(){
		$('#menu__nav_mob').toggleClass('hidden visible');
        $('html').removeClass('hidden-overflow');
        $('.arrowups').toggleClass('visible hidden'); 
	});
});

$(document).ready(function(){
	$('.menu__item').click(function(){
		$('#menu__nav_mob').toggleClass('hidden visible');
        $('html').removeClass('hidden-overflow');
        $('.arrowups').toggleClass('visible hidden'); 
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
    scrollTop: $("#footer").offset().top   
    }, 1000); 
   });

   $("#arrowup").click(function() { 
    $('html, body').animate({
    scrollTop: $(".main").offset().top   
    }, 500); 
   });

   