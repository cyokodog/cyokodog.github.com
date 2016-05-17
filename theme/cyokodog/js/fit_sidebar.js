var $ = require('jquery');
module.exports.define = function(){

  var s = $.fitSidebar = function(target, option){
    var o = this, c = o.config = $.extend({}, s.defaults, option);
    c.target = $(target).addClass('fit-sidebar');
    c.blank = $('<div/>').addClass(s.id + '-blank').insertBefore(c.target);
    c.blank.css('border','solid 1px #fff');
    c.blank.css({
      'margin-top' : c.target.css('margin-top'),
      'margin-right' : c.target.css('margin-right'),
      'margin-bottom' : c.target.css('margin-bottom'),
      'margin-left' : c.target.css('margin-left'),
      'border-top-width' : c.target.css('border-top-width'),
      'border-right-width' : c.target.css('border-right-width'),
      'border-bottom-width' : c.target.css('border-bottom-width'),
      'border-left-width' : c.target.css('border-left-width'),
      'padding-top' : c.target.css('padding-top'),
      'padding-right' : c.target.css('padding-right'),
      'padding-bottom' : c.target.css('padding-bottom'),
      'padding-left' : c.target.css('padding-left')
    });
    c.wrapper = $(c.wrapper);
    c._win = $(window)
      .on('scroll', function(){
        o.adjustPosition();
      })
      .on('resize', function(){
        c.target.hasClass('for-chrome-bug');
        o.adjustPosition();
      });
setTimeout(function(){
    o.adjustPosition();
},0);
setTimeout(function(){
    o.adjustPosition();
},1000);
  }
  $.extend($.fitSidebar.prototype, {
    adjustPosition : function(){
      var o = this, c = o.config;
      if(c._win.width() < c.responsiveWidth){
        c.wrapper.removeClass(c.fixedClassName);
        c.wrapper.addClass(c.noFixedClassName);
        c.target.removeClass(s.id + '-fixed');
        c.blank.hide();
        c.target.width('auto');
        c.direction = null;
        return;
      }
      c.wrapper.addClass(c.fixedClassName);
      c.wrapper.removeClass(c.noFixedClassName);
      c.target.addClass(s.id + '-fixed');
      var offset = c.blank.show().offset();
      var scrollTop = c._win.scrollTop()
      var outerHeight = c.target.outerHeight();
      var overHeight = outerHeight - c._win.height();
      if(overHeight < 0) overHeight = 0;
      if(!c.direction){
        c.lastFixedTop = c.lastDownFixedTop = c.lastUpFixedTop = offset.top - scrollTop;
        c.lastScrollTop = c.lastDownScrollTop = c.lastUpScrollTop = scrollTop;
      }
      c.target.width(c.blank.width());
      c.blank.height(c.target.height());
      c.direction = scrollTop < c.lastScrollTop ? 'up' : 'down';
      var adjustDown = function(){
        var top = c.lastUpFixedTop + (c.lastUpScrollTop - scrollTop)
        if(top < 0){
          if(top + overHeight < 0){
            top = -overHeight;
            var limit = c.wrapper.offset().top + c.wrapper.height();
            var pos = scrollTop + outerHeight + top;
            if(pos > limit){
              top = (limit - scrollTop) - outerHeight;
            }
          }
        }
        c.target.css({
          top : top,
          bottom : 'auto'
        });
        c.lastDownFixedTop = top;
        c.lastDownScrollTop = scrollTop;
      }
      var adjustUp = function(){
        var top = c.lastDownFixedTop + (c.lastDownScrollTop - scrollTop)
        if(top > 0){
          top = offset.top-scrollTop;
          if(top < 0) top = 0;
        }
        c.target.css({
          top : top,
          bottom : 'auto'
        });
        c.lastUpFixedTop = top;
        c.lastUpScrollTop = scrollTop;
      }
      if(c.direction == 'down'){
        adjustDown();
//        adjustUp();
      }
      else{
        adjustUp();
//        adjustDown();
      }
      c.lastFixedTop = top;
      c.lastScrollTop = scrollTop;



    }
  });
  $.fn.fitSidebar = function(option){
    return this.each(function(){
      var el = $(this);
      el.data(s.id, new $.fitSidebar(el, option));
    });
  }
  $.extend(s, {
    defaults : {
      wrapper : 'body',
      responsiveWidth : 0,
      fixedClassName : 'fit-sidebar-fixed-now',
      noFixedClassName : 'fit-sidebar-no-fixed-now'
    },
    id : 'fit-sidebar'
  });


};
