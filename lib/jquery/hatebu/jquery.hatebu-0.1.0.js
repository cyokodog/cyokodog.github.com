(function(){
	$.hatebu = function(option){
		var c = $.extend({},$.hatebu.defaults,option);
		if(!c.title && c.url == location.href) c.title = $('title').text();
		var img = $('<img style="border:none;width:20px;height:20px"/>').
			prop({
				src : 'http://b.st-hatena.com/images/entry-button/button-only.gif',
				alt : c.alt
			})
		var link = $('<a/>').
			addClass('hatena-bookmark-button').
			prop({
				href : "http://b.hatena.ne.jp/entry/" + encodeURIComponent(c.url),
				title : c.alt
			}).data({
				'hatena-bookmark-title' : c.title,
				'hatena-bookmark-layout' : c.layout
			});
		return link.append(img);
	}
	$.hatebu.rendar = function(){
		$('<script/>').prop({
			charset : 'utf-8',
			async : 'async',
			src : 'http://b.st-hatena.com/js/bookmark_button.js'
		}).appendTo('body');
	}		 
	$.hatebu.defaults = {
		url : location.href,
		title : '',
		layout : 'simple-balloon',
		alt : 'このエントリーをはてなブックマークに追加'
	}
})(jQuery);
