<?php

class Controller{
	protected $response_data, $error_data, $session_data;
	
	public function __construct(){
		
	}
	
	
	/*
		All responses will be send thru this method.
		In a way, this is the only outgoing route of all the responses unless there is some fatal error
	*/
	public function spitJSON(){
		$response = array("response" => $this->response_data, "error" => $this->error_data, "session" => $this->session_data);
		echo json_encode( $response );
	}
	
}