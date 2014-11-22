(function($){
	
	var drop_down_list_wrapper = $('.drop_down_list_wrapper');
	
	
	//Selectbox
	
	drop_down_list_wrapper.on('click', function(){
	
		var selected = $(this).find('.selected'),
		list = $(this).find('.drop_down_list');
		
		$(this).Open_list(selected, list);
	});
	
	drop_down_list_wrapper.find('.drop_down_list_link').on('click', function(){
	
		var value = $(this).text(),
		list = $(this).parents('.drop_down_list').siblings('.selected');
		
		list.text(value);
	});
	
	$.fn.Open_list = function(selected,  list){

		if(selected.hasClass('checked')){
			selected.removeClass('checked');
			list.hide();
		}
		else{
			selected.addClass('checked');
			list.show();
		}
	};
})(jQuery);