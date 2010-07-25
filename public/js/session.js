/*
	Deals with Session thingy.
	Eg. Login / Logout / Forgot Password
*/

(function($){
	
	Session = {
		/*
			Check if User is logged in
		*/
		isLoggedIn : function(){
			Connection.request({
				url : "session/"
			});
		},
		
		
		showLogin : function(){
			//redirect to login page
			//window.location.href = "login.html"
			
			//hide all panels
			Core.hidePanels();
		
			//check if Login panel exist. If yes, show it, else create one
			if( $("#login-panel").length ){
				Core.showPanel("login-panel");
			}
			else{
			
				Core.addPanel(loginPanel);
				Core.showPanels(["#login-panel"]);
				
				$("#login-form").submit( function(){
					var $this 		= $(this);
					
					var data = {
						username	: 	$this.find("#login-username").val(),
						password	: 	$this.find("#login-password").val()
					}
					
					
					Session.login(data, 
					function(r){
						/* 	If successful,
							Hide Login Box.
							Redirect to Previous Page
							else Dashboard
						*/
						Core.showMessage("Should show Dashboard...");
					},
					function(e){
						if(e.message && e.message.length > 0){
							Core.showMessage(e.message);
						}
					});
					
					return false;	
				} );
			}
		},
	
		
		login : function(data, success, error){
			Connection.request({ url: "session/login",data : data, type : "POST", success : success, error : error });
			
		}
	}//End of Session object


	
	
	
})(jQuery);