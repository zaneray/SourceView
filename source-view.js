(function($) {
	$.fn.SourceCodeView = function(element){
		this.each(function(){
		
			var button = $('<button class="viewbtn" type="button">View Source Code</button>');
			var container = $('<div class="sourceviewer">');
			
			var sourceCode = $(this).html();

			sourceCode = sourceCode.trim();

			container.html("<xmp>" + sourceCode + "</xmp>");

			$(this).after(button);
			button.after(container);

			button.on('click', function(){
				if (button.hasClass('showing')){
					button.removeClass('showing').html('View Source Code');
				} else {
					button.addClass('showing').html('Hide Source Code');
				}

				$(this).next().slideToggle( 300, function() {
    			// nothing for now
  			});
			});

		});

	}
	
})(jQuery);
