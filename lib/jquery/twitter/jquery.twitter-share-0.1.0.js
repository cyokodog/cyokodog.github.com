$.twitterShare = function(option){
	var c = $.extend({},$.twitterShare.defaults,option);
	if(!c.title) c.title = $('title').text();
	var data = {};
	for(var i in c){
		var v = c[i];
		!v || !(/^data-.+/.test(i)) || (data[i] = v);
	}
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


