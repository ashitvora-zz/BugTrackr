/*
 * routes.js
 * 
 * Ashit Vora (av@voratec.com)
 * 07/25/2010
 *
 * All routes are defined here.
 * Uses sammy.js
 * 
 * credits: http://code.quirkey.com/sammy/
 *
 */

(function($){
	
	var app = new Sammy(function() {
	    this.element_selector = '#page'; 
		

		//Index Page is Dashboard
	    this.get('#/', function(context) {
			//App.showDashBoard();
	    });
	

		//Get list of all users (default page# = 1)
		this.get('#/users', function(context){
			console.log("Show Users");
		});
		

		//Get list of users from give page #
		this.get('#/users/:id', function(context){
			console.log("Show Users. Page: " + this.params.id);
		});
		

		//Get info about user with given ID
		this.get('#/user/:id', function(context){
			console.log("Show User with ID: " + this.params.id);
		});
		

		//Form to add new user
		//GET Method shows the form
		//POST Method submits the form
		this.get('#/add/user', function(context){
			console.log("Add user form");
		});
		
		this.post('#/add/user', function(context){
			console.log("Add user");
			
			var username = context.params.add_username,
				password = context.params.add_password;
			
			User.create({username : username, password : password});
			
			return false;
		});


		//Form to update the user info
		//GET Method to get edit form
		//PUT Method to update the data
		this.get('#/edit/user/:id', function(context){
			console.log("Edit user form. Id: " + this.params.id);
		});
				
		this.put('#/edit/user/:id', function(context){
			console.log("update user. Id: "+ this.params.id);
		});


		//Delete user with given ID
		this.del('#/user/:id', function(context){
			console.log("Delete user. Id: "+this.params.id);
		});
		
		

	  });

	  $(function() {
	    app.run('#/');
	  });
	
})(jQuery);