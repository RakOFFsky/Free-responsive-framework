/*
Responsive framework
author: Developed by Stas Melnikov. http://stas-melnikov.ru
*/


(function($){
	var element;
	//tabs

	$('.tabs').on('click', 'li:not(.current)', function() {

		element = $(this).parents('.tabs_container');
		$(this).Tabs(element);
			
	});


	$.fn.Tabs = function(element){

		$(this).addClass('current').siblings().removeClass('current');
		
		element.find('.box').eq($(this).index()).show(1,function(){
		
			$(this).addClass('show_tab');
			
		}).siblings('.box').hide(1,function(){
		
			$(this).removeClass('show_tab');
		});
	};
})(jQuery);