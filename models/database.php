<?php

class DB {
	protected $conn;
	
	public function __construct(){
		$this->conn = mysql_connect( $config['db']['hostname'], $config['db']['username'], $config['db']['password'] );
		mysql_select($config['db']['database'], $this->conn);
	}
	
}