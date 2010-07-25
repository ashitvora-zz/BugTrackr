/*
	Connection  Object is used to Make XHR request, Handle Response.
*/

(function($){

	Connection = {
	
		/*
			XHR Request
		*/
		request : function(r){
	
			/*
				Request Object
				Override the Request Params send as a Param with the Default Request Params
			*/
			var request = $.extend({
				type		: 	"GET",
				dataType	: 	"json",
				data		: 	{},
				success		: 	function(response){ return response; },
				error		: 	function(XMLHttpRequest, textStatus, errorThrown){  },
				complete	: 	function(response){ Core.setTitle(response.title); }
			}, r);	//end request params
	
			//make request
			$.ajax(request);
		},

		/*
			Handle Error
		*/
		handleError: function(error){
	
		}
	} //End of Connection Object
	
})(jQuery);