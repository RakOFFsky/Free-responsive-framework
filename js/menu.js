(function($){

 
	var wrapper_menu = $('#wrapper_menu'),
	icon_menu = wrapper_menu.find('#icon_menu'),
	background_additional_menu = $('#background_additional_menu'),
	close_menu = background_additional_menu.next().find('#close_menu'),
	body = $('body'),
	id_body;
	
	if ("ontouchstart" in document.documentElement){
	   body.attr('id','touch');
	}
	else{
		body.attr('id','no_touch');
	} 
	
	id_body = body.attr('id');
	
	icon_menu.on('click', function(){
		$(this).Show_Menu();
	});
	
	background_additional_menu.on('click', function(){
		$(this).Hide_Menu();
	});
	
	close_menu.on('click', function(){
		$(this).Hide_Menu();
	});
	
	$.fn.Show_Menu = function( ) {

		$(this).addClass('active_icon');
		
		setTimeout(function(){
			body.addClass('active_menu');
		}, 100);
	}
	 
	$.fn.Hide_Menu = function( ) {

		$(this).removeClass('active_icon');
		
		setTimeout(function(){
			body.removeClass('active_menu');
		}, 100);
	}
})(jQuery);