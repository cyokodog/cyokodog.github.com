var $ = require('jquery');
module.exports = function(){

  var f = $.fadePage = $.extend({
    autoRun : true,
    fadeInSpeed : 1500
  }, $.fadePage);

  f.exec = function(){
    $('body').addClass('fade-layer-off');
    $('<div class="fade-layer"/>').prependTo('body').fadeOut(f.fadeInSpeed, function(){
      $(this).remove();
    });
    $(window).on("beforeunload",function(e){
      $('body').fadeOut();
    });
  }

  $(function($){
    if(f.autoRun){
      $.fadePage.exec();
    }
    else{
      $('body').addClass('fade-layer-off');
    }
  });

};
