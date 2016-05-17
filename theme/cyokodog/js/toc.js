var $ = require('jquery');
module.exports = function (){
  var headers = $('body').hasClass('list') ? $('.article__title') : $('div.article__body > h2');
  if(headers.size() > 0){
    var widget = $('<div class="wp-widget"><div class="wp-widget__header">ARTICLE INDEX</div><ul class="article-index"></ul></div>').prependTo('div.l-page-nav__body');
    var ul = widget.find('ul');
    headers.each(function(){
      var $head = $(this);
      var $a = $('<a href="#"/>').text($head.text()).data('head', $head)
      $a.wrap('<li/>').parent().appendTo(ul);
    });
    ul.on('click', 'a', function(){
      var top = $(this).data('head').offset().top;
      $('html,body').stop().queue([]).animate({scrollTop:top},1000);
      return false;
    });
    $('div.l-page-nav__body').fitSidebar({
      wrapper : '.l-contents',
      responsiveWidth : 960
    });
  }
};

