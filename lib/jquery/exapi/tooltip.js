(function($){

    $.tooltip = function( idx , targets , option ){
		var o = this,
		c = o.config = $.extend({} , $.tooltip.defaults , option );
		c.targets = targets;
		c.target = targets.eq(idx);
		c.tip = $(c.tip).hide();
		if( c.bindEvent ){
			c.target
				.mouseover(function(){o.tipShow()})
				.mouseout(function(){o.tipHide()});
		}
    }
    $.extend( $.tooltip.prototype,{
		tipShow : function(){
			var o = this,c = o.config;
			var pos = c.target.offset();
			c.tip.html(c.target.attr('title')).show()
			.css({
				'position':'absolute',
				'top':pos.top - c.tip.outerHeight() -20,
				'left':pos.left - 20
			})
			return o;
		},
		tipHide : function(){
			var o = this,c = o.config;
			c.tip.hide();
			return o;
		},
		getTargets : function(){
			return this.config.targets;			
		},
		getTarget : function(){
			return this.config.target;			
		}
    });
    $.extend( $.tooltip,{
		defaults : {
			api : false,
			bindEvent : true
		}
    });
    $.fn.tooltip = function( option ) {
		var targets = this,api = [];
        targets.each(function(idx) {
			var target = targets.eq(idx);
			var obj = target.data('tooltip') ||
				new $.tooltip( idx , targets , option);
			api.push(obj);
			target.data('tooltip',obj);
        });
		return option && option.api ? $.ex.api(api) : targets;
    };

})(jQuery);


