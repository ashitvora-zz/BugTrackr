/*
 * core.js
 * Ashit Vora
 * 07/25/2010
 *
 * Core object handles the core common functionality of the Application
 *
 */

(function($){
	Core = {
	
		//Set title of the Window
		setTitle : function(title){
			var titleToSet = (title === undefined || title === null) ? App.name : title;
			$("title").html(titleToSet);
		},

	
		//Hide all Panels
		hidePanels :  function(){
			$(".panel").hide();
		},


		//Show a particular panel
		showPanels : function(panels){
			this.hidePanels();
	
			var len = panels.length;
			for(var i=0; i< len; i++){
				if(panels[i] !== "undefined" || panels[i] !== null){
					$(panels[i]).show();
				}
			}
		},


		//Add new panel, Append it to the body
		addPanel : function(panel){
			$("#page").append(panel);
		},
		
		removePanel :  function (panel){
			$("#page").find(panel).remove();
		},
		
		removeAllPanels : function(){
			$("#page").empty();
		},


		//Load
		showLoading : function(){
			this.hidePanels();
			this.showPanels("loading-app");
			//$("#loading-app").show();
		},

		//remove loading
		hideLoading : function(){
			$("#loading-app").hide();
		},


		//Show message and hide it after 5 seconds
		showMessage : function(message){
			if(message && message.length > 0){
				var $messagebar = $("#message-bar");
				$messagebar.find("span.message").text(message);
				$messagebar.show();
				setTimeout(this.hideMessage, 5000);
			}
		},
		
		//Hide the message
		hideMessage : function(){
			var $messagebar = $("#message-bar");
			$messagebar.hide();
		}
	}//End of Core Object
		
})(jQuery);