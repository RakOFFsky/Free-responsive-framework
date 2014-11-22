/*
Responsive framework
author: Developed by Stas Melnikov. http://stas-melnikov.ru
*/

var body = $('body');

(function($){
	var type_production,   production_item_full,
		siblings_type_production, active_block,
	

		catalog = $('#catalog'),
		all_production =  catalog.find('#all_production'),
		tooltip = catalog.nextAll('#tooltip'),
		filters = catalog.find('#type_products'),
		scroll_position = 222;

	//filter
	filters.find('.type_products_item').on('click', function(){
	
		var type_products = $(this).parents('#type_products'),
		id_category = $(this).attr('id');
		
		siblings_type_production = $(this).siblings();
		
		type_production = id_category + '_production';
		
		active_block = type_products.nextAll('#'+type_production);
	
		production_item_full = catalog.find('.production_item_full');
		
		if(production_item_full.length > 0){
			
			production_item_full.removeClass('production_item_full').addClass('hidden_production show_detail');
			production_item_full.find('.description_product').removeClass('description_product_active');
			production_item_full.siblings('.production_item').show().addClass('hidden_production');
			
		}
		
		if(id_category === 'all_category'){
						
			$(this).addClass('active_type');
			siblings_type_production.removeClass('active_type');
			active_block.removeClass('show_production');
			all_production.stop(true, true).slideDown().siblings('.production').removeClass('show_production');
		}

		else{
			siblings_type_production.removeClass('active_type');
			$(this).addClass('active_type');
			all_production.stop(true, true).slideUp(function(){
				active_block.addClass('show_production').siblings('.production').removeClass('show_production');
			});
		}
	});
	
	all_production.find('.show_category').on('click', function(){
		
		var id_category = $(this).attr('data-id'); 
		
		type_production = id_category + '_production';
		filters.find('#' + id_category).addClass('active_type').siblings().removeClass('active_type');
				
		active_block = all_production.nextAll('#'+type_production);
		
		all_production.stop(true, true).slideUp(function(){
				active_block.addClass('show_production');
		});
	});
	
	//show detail product
	catalog.on('click','.show_detail', function(){
		if(!$(this).hasClass('no_clicked')){
			var active_production_item = $(this),
			active_production_item_siblings = active_production_item.siblings('.production_item');
			active_production_item_siblings.removeClass('hidden_production').addClass('no_clicked');
			
			filters.fadeOut(700);
			$(this).Show_Product(active_production_item, active_production_item_siblings);
		}
	});
	
	//close detail product
	catalog.find('.close_description').on('click', function(event){
		event.stopPropagation();

		var active_production_item = $(this).parents('.production_item');
		$(this).Enable_Close_Product(active_production_item);
	});
	

	//add to basket
	catalog.find('.add_basket').on('click', function(event){

		event.preventDefault();
		
		var product_id = this.id,
		text = 'Product successfully added to cart!',
		delay = 1000;			
		$(this).Show_Tooltip(text, delay);
	});
	
/******************************Functions******************************/	

	
	$.fn.Show_Tooltip = function(text, delay ){
	
		tooltip.text(text);
		tooltip.fadeIn(function(){
			setTimeout(function(){
				tooltip.fadeOut();
			}, delay); 
		});
	};

	$.fn.Show_Product = function(active_production_item, active_production_item_siblings){
		
		var description_product = active_production_item.find('.description_product');
			
			$('html, body').animate({scrollTop: scroll_position}, 800);


			
			if(active_production_item_siblings.length  < 1){
			
				active_production_item.removeClass('show_detail hidden_production').fadeOut(700, function(){
					active_production_item.removeClass('show_detail')
					.addClass('production_item_full').fadeIn(700, function(){
						description_product.addClass('description_product_active');
					});
				});

			}else{
			
				active_production_item.removeClass('hidden_production');
				
				active_production_item.fadeOut(700, function(){
					active_production_item.removeClass('show_detail');
				});
			
				active_production_item_siblings.fadeOut(700, function(){

					active_production_item.addClass('production_item_full');
					
					setTimeout(function(){
						active_production_item.fadeIn(700);
					}, 200);
					
					setTimeout(function(){
							description_product.addClass('description_product_active');
					}, 300);
				});
			}
	};
	

	$.fn.Close_Product = function(active_production_item, active_production_item_siblings, img_production){

		active_production_item.find('.description_product').removeClass('description_product_active');
		
		setTimeout(function(){

			img_production.fadeOut(function(){
			
				active_production_item.removeClass('production_item_full').addClass('show_detail');
				
				if(!active_production_item.hasClass('production_item_full')){
					
					img_production.fadeIn(function(){

						active_production_item.addClass('hidden_production');
						
						active_production_item_siblings.fadeIn(700, function(){
							active_production_item_siblings.addClass('hidden_production').removeClass('no_clicked');
							
						});
						filters.fadeIn(700);
					});
				}
			});
		}, 200);
		
		
	};
	

	$.fn.Enable_Close_Product = function(active_production_item){
	
		if(active_production_item.length > 0){
			
			var active_production_item_siblings = active_production_item.siblings('.production_item'),
			img_production = active_production_item.find('.img_production');
			
			$(this).Close_Product(active_production_item, active_production_item_siblings, img_production);
		}
	};
})(jQuery);

window.onload = function(){

	body.removeClass('no_transition'); 
};
