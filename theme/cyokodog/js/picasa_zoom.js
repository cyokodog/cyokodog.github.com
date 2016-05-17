var $ = require('jquery');
module.exports.define = function(){

  var plugin = $.fn.picasaZoom = function( option ){
    return this.each(function(){
      var c = $.extend({}, plugin.defaults, option );
      var target = $(this);
      var link = target.wrap('<a href="javascript:void(0)" class="picasa-zoom"/>').parent();
      var disp = target.css('display');
      link.css({'display': (disp += (disp == 'inline' ? '-block' : ''))});
      !c.useIcon || (c.icon = $('<span class="picasa-zoom-icon">+</span>').appendTo(link));
      link.on('click', function(){
        var img = $(this).find('img').css('opacity', 0.5);
        var size = [c.thumKey, c.pictKey];
        var src = img.prop('src');
        size = (src.search(size[0]) < 0) ? size.reverse() : size;
        src = img.prop('src').replace(size[0], size[1]);
        var dummy = $('<img/>').on('load', function(){
          img.prop('src', src).css('opacity', 1).hide().fadeIn();
          dummy.remove();
        }).prop('src',src);
        !c.icon || c.icon.text(c.icon.text() == '+' ? '-' : '+');
      });
    });
  }
  plugin.defaults = {
    useIcon : true,
    thumKey : '/s144/',
    pictKey : '/s800/',
  }

};
