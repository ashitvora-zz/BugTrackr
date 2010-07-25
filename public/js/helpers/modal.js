(function($){
	var Modal = {
		initialized : false,
		modalBox : {},
		overLay  : {},
		
		init : function(){
			overLay = $("<div>");
			overLay.css({
				width : "100%",
				height: "100%",
				backgroundColor: "#222",
				opacity: "0.7",
				display : "none",
				position : "fixed",
				"z-index"   : "90",
				top : 	"0"
			});
			
			
			modalBox = $("<div>");
			modalBox.css({
				"top"		 	: "20",
				"width" 	 	: "500px",
				"margin" 	 	: "0 auto",
				"padding"  		: "10px",
				"border"   		: "10px solid #555",
				"backgroundColor": "#eee",
				"z-index"   	: "1000",
				"display"  		: "none",
				"border-radius" : "10px",
				"-moz-border-radius" : "10px",
				"-webkit-border-radius" : "10px",
				"position"		: "relative",
				"top"			: "50"
			});
			
			$("body").append(modalBox);
			$("body").append(overLay);

			initialized = true;	
		},
		
		show : function(heading, content, isModal){
			
			if(typeof initialized === "undefined" || initialized === false){
				console.info("initialized");
				this.init();
			}
			
			if(isModal !== "undefined" && isModal === true){
				overLay.show();
			}
			
			modalBox.empty().html("<h4>"+ heading +"</h4><p>"+ content +"</p>").show();
		},
		
		hide : function(){
			var self = this;
			this.overLay.hide();
			this.modalBox.hide();
		}
	}
	
	//Modal.show("Hello", "This is a hello world message", true);
})(jQuery);