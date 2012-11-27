(function($){

	// prop method
	if(!$.fn.prop){
		$.fn.prop = $.fn.attr;
	}

	// on - off method
	var eventApi = function(prefix){
		prefix = prefix || '';
		return function(trigger,selector,handler){
			var target = $(this), arg = arguments;
			if(trigger == 'hover') trigger = 'mouseenter';
			if(arg.length >= 3){
				if($.fn[prefix + 'delegate']){
					return target[prefix + 'delegate'](selector,trigger,handler);
				}
				else{
					target =  target.find(selector);
				}
			}
			else{
				handler = selector;
			}
			return target[prefix + 'bind'](trigger,handler);
		}
	}

	// on method
	if(!$.fn.on){
		$.fn.on = eventApi();
	}

	// off method
	if(!$.fn.off){
		$.fn.off = eventApi('un');
	}

})(jQuery);
