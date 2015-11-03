(function($) {
	$.fn.SourceCodeView = function(element){
		this.each(function(){
		
			var button = $('<button>');
			var container = $('<div>');

			button.html('View Source Code');
			button.addClass('viewbtn');
			button.attr('type', 'button');

			container.html("<xmp>" + $(this).html() + "</xmp>");
			container.addClass('sourceviewer');

			$(this).after(button);
			button.after(container);

			button.on('click', function(){
				if ($(this).hasClass('showing')){
					$(this).removeClass('showing');
					$(this).html('View Source Code');
				} else {
					$(this).addClass('showing');
					$(this).html('Hide Source Code');
				}

				$(this).next().slideToggle( 300, function() {
    			// nothing for now
  			});
			});

		});

	}
	
})(jQuery);
