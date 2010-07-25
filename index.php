<?php
define("NO_DIRECT_ACCESS", true);
/*
*****************************************
Check that the Request is from Ajax
*****************************************
*/


/*
****************************************
Load all Controllers
****************************************
*/
require_once("controllers/users.php");

/*
****************************************
Load all Models
****************************************
*/
require_once('models/database.php');
require_once('models/user.php');


/*
****************************************
Load all Config Files
****************************************
*/
require_once("config/config.php");
require_once("config/routes.php");