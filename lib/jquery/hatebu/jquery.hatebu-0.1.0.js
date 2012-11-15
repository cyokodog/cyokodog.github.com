(function(){
    $.hatebu = function(option){
        var c = $.extend({},$.hatebu.defaults,option);
        var s = $.hatebu.status;
        if(!c.title) c.title = $('title').text();
        var img = $('<img/>').prop({
            src : "http://b.st-hatena.com/images/entry-button/button-only.gif",
            alt : "このエントリーをはてなブックマークに追加",
            width : "20",
            height : "20"
        }).
        css({
            'border':'none'
        });
        var link = $('<a/>').
        addClass('hatena-bookmark-button').
        prop({
            href : "http://b.hatena.ne.jp/entry/" + c.url,
            title : "このエントリーをはてなブックマークに追加",
        }).data({
            'hatena-bbookmark-title' : c.title,
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
        layout : 'simple-balloon'
    }
    $.fn.hatebu = function(option){
        this.each(function(){
            $.hatebu(option).appendTo(this);
        });
        $.hatebu.rendar();
    }
})(jQuery);
