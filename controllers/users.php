<?php
require_once ('models/user.php');

require_once ('controllers/controller.php');
class Users extends Controller{
	
	private $user;
	
	public function __construct(){
		$this->user = new User();
	}
	
	public function create($user){
		$this->data = $user;
		$this->spitJSON();
	}
	
}