(function(){
	$.twitterShare = function(option){
		var c = $.extend({},$.twitterShare.defaults,option);
		if(!c.title) c.title = $('title').text();
		return $('<a/>').
			addClass('twitter-share-button').
			prop({
				href : "https://twitter.com/share"
			}).
			data({
				'via': c.via,
				'lang' : c.lang,
				'text' : c.title,
				'url' : c.url
			});
	}
	$.twitterShare.rendar = function(){
		$('<script/>').prop({
		charset : 'utf-8',
		src : 'http://platform.twitter.com/widgets.js'
		}).appendTo('body');
	}        
	$.twitterShare.defaults = {
		'via': '',
		'lang' : 'ja',
		'text' : '',
		'url' : location.href
	}
})(jQuery);
