<?php
require_once('../config/names.php');
require_once('../config/config.inc.php');
require_once("../dist/freetag.class.php");

//session_start();
//$user_id = $_SESSION['user_id'];

$user_id = 1;


$freetag_options = array( 
   'db_user' => $username, 
   'db_pass' => $password, 
   'db_host' => $Server, 
   'db_name' => $db_name );


$freetag = new freetag($freetag_options);
 
if (isset($_POST['tags']) && trim($_POST['tags']) != "") {

  // gets current tags
  // deletes old tags that don't appear in the new string
  // preserve old tags 'by diffing out of new update'
  // add all new tags
  // see if tag exits, else add to tags table
  // then insert into webit_tags

  $freetag->tag_object($user_id, $_POST['webit_id'], $_POST['tags']);

}
 
?>

