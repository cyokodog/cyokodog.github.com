(function($){
	$.titleDeLoading = function(show){
		var o = $.titleDeLoading, s = o.status, t = $('title');
		s.orgTitle = s.orgTitle || t.text();
		if(show){
			(function(text){
				var callee = arguments.callee;
				t.html(text);
				s.timer = setTimeout(function(){
					callee((text.length < s.textMaxLength ? text : '')
					+ s.loadingText);
				},s.delay);
			})(s.loadingText);
		}
		else{
			clearTimeout(s.timer);
			t.html(s.orgTitle);
		}
	}
	$.titleDeLoading.status = {
		loadingText : '.',
		delay : 300,
		textMaxLength : 6
	}
})(jQuery);
