<?php
include '../config/names.php';
require_once('../lib/craigtags.php');

  //session_start();
  //$user_id = $_SESSION['user_id'];
  $user_id = 1;


  $webit_id = "null";
  if (isset($_POST['webit_id'])) {
    $webit_id = $_POST['webit_id'];
  } else {
    return;
  }

  $ct = new craigtag($Server,$username,$password,$db_name);

  $tagarray = array();
   
  if (isset($_POST['tags']) && trim($_POST['tags']) != "") {
    $tagarray = $ct->parse_tags($_POST['tags']);
  } else {
    return;
  }

  // loop through tagarray
  // normalize tag
  // see if tag exits already on object,
  // else add to tags table (if not already there)
  // then insert into webit_tags

  $currentTags = $ct->get_object_tags($webit_id);

  foreach ($tagarray as $tag) {
   if (!in_array($tag,$currentTags)) {
       $tag_id = $ct->addget_tagid($tag);
       if ($tag_id != 0) {
          $ct->tag_object($webit_id, $tag_id);
       }
    }
  } 

  $currentTags = $ct->get_object_tags($webit_id);

  echo json_encode($currentTags); 


?>

