$.fixedActivity = function(show){
	var o = $.fixedActivity;
	var body = $('body'),win = $(window);
	if(!o.pageWrapper){
		o.pageWrapper = body.wrapInner('<div/>').find('> div').eq(0);
	}
	body.activity(show);
	if(show){
		var icon = body.find('> *').eq(0);
		icon.css({
			margin :0,
			position:'fixed',
			top:(win.height() - icon.height()) / 2,
			left:(win.width() - icon.width()) / 2
		});
	}
	o.pageWrapper.css({opacity: show ? .3 : 1});
}
