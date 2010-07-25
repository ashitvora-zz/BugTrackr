<?php
$route = substr( $_SERVER["REQUEST_URI"], stripos($_SERVER["REQUEST_URI"], "?") + 1 );

switch ($route){
	case  'user/add' :
			
			$data['username'] = $_POST['username'];
			$data['password'] = $_POST['password'];
			
			$u = new Users();
			$u->create($data);
			
		break;
		
	default:
	
}