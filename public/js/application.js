/*
 * Global configuration file
 */


(function($, undefined){
	
	App = {
		name 	: "Bug Tracker",
		version	: "0.1",
		author	: "Ashit Vora",
		base_url: "index.php",
		
		init : function(){
			if( Session.isLoggedIn() ){
				//add Message Panel and Loading Panel
				Core.addPanel("#msgPanel");
				this.showDashBoard();
			}else{
				Core.removeAllPanels();
				Session.showLogin();
			}
		},

		showDashBoard: function(){
			if(Session.isLoggedIn()){
				console.log("User is Logged In. Show Dashboard");
			}
			else{
				console.log("User not logged in. Show login Dialog");
			}
			
		}
	}//End of App object
		
})(jQuery);