(function($){

	$.twitterShare = function(option){
		var c = $.extend({},$.twitterShare.defaults,option);
		var data = {};
		for(var i in c) !c[i] || !(/^data-.+/.test(i)) || (data[i] = c[i]);
		return $('<a/>').
			text(c.text).
			addClass('twitter-share-button').
			prop({href : "https://twitter.com/share"}).
			attr(data);
	}
	$.twitterShare.rendar = function(){
		$('<script/>').prop({
			charset : 'utf-8',
			src : 'http://platform.twitter.com/widgets.js'
		}).appendTo('body');
	}
	$.twitterShare.defaults = {
		'text' : 'Tweet',
		'data-url' : '',
		'data-text' : '',
		'data-via' : '',
		'data-lang' : '',
		'data-size' : '',
		'data-related' : '',
		'data-count' : '',
		'data-hashtags' : ''
	}

})(jQuery);
