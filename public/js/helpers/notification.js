/*
	@author 	Ashit Vora
	@plugin 	Notify
	@date		05/09/2010
	@required	jQuery
	@usage
		$.Notify.show(<msg>);
*/

//Notify Extension
(function($){
	$.Notify = {
		
		NotifyDiv :{},
		timeOut: 5000,
		
		init : function(){
			//Message Container
			this.NotifyDiv = $("<div>");
			
			//style the container
			this.NotifyDiv.css({
				"width" 	: "100%",
				"padding"	: "10px 20px",
				"margin"	: "0",
				"fontSize"	: "20px",
				"textAlign"	: "center",
				"position"	: "fixed",
				"top"		: "0",
				"left"		: "0",
				"zIndex"	: "1000",
				"backgroundColor": "#fff",
				"display"	: "none",
				"overflow"	: "visible",
				"borderBottom": "1px solid #aaa"
			});
			
			//add it to the body
			$("body").append(this.NotifyDiv);
			
			var self = this;
			this.NotifyDiv.bind("click", function(){
				self.hide();
			})
		},
		
		show : function(msg){
			//save this to use it later in setTimeout function
			var self = this;
			
			//add the message and make it visible
			this.NotifyDiv.text(msg).slideDown(function(){
				setTimeout(function(){
					self.hide();
				}, self.timeOut);
			});
		},
		
		hide : function(){
			//hide Notify
			this.NotifyDiv.slideUp();
		}
		
	}
	
	$("document").ready(function(){
		//Initialize it
		$.Notify.init();
	});
	
})(jQuery);