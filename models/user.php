<?php
require_once("models/database.php");

class User extends DB{
	protected $username, $hashed_password, $status;
	
	public function __construct(){
		
	}
	
	public function create($user){
		//query to add user
	}
	
	public function update($user){
		
	}
	
	public function delete($user_id){
		
	}
	
	public function index($count, $page){
		
	}
	
	public function show($user_id){
		
	}
}