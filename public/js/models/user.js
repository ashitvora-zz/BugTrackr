var User = {
	
	create : function(user){
		console.log("Creating user");
		console.info(user);
		
		//make request to add the user
		Connection.request({ url: App.base_url+"user/add",data : user, type : "POST"});
	},
	
	update : function(user){
		console.log("Updating user.");
		console.info(user);
	},
	
	delete : function(id){
		console.log("Deleting user. Id: "+id);
	}
	
}