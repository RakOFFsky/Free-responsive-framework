/*
Responsive framework
author: Developed by Stas Melnikov. http://stas-melnikov.ru
*/

(function($){
	var	wrapper_response = $('#wrapper_response'),
		
		form_contact = $('#form_contact'),
		full_name = form_contact.find('#full_name'),
		email = form_contact.find('#email'),
		comment = form_contact.find('#comment'),
		button = form_contact.find('#button');
		button.removeAttr("disabled");
		
		form_contact.on('submit', function(){
		event.preventDefault();
		
		if(!this.checkValidity || this.checkValidity()){
			
			
			var full_name_info = full_name.val(),
			email_info = email.val(),
			comment_info = comment.val();
			
			$.ajax({            
				url: 'php/test.php',
				method: 'POST',
				data: {
					"full_name_info" : full_name_info,
					"email_info" : email_info,
					"comment_info" : comment_info
				},
				success: function(data){
					wrapper_response.html(data);
					wrapper_response.fadeIn();
					
					full_name.val("");
					email.val("");
					comment.val("");
					
					setTimeout(function(){
						wrapper_response.fadeOut(function(){
							wrapper_response.html("");
						});
					}, 2000);
				}
			});
		}
	});
})(jQuery);