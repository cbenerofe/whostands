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

  $tag = "null";
  if (isset($_POST['tag'])) {
    $tag = $_POST['tag'];
  } else {
    return;
  }

  $ct = new craigtag($Server,$username,$password,$db_name);


       $tag_id = $ct->addget_tagid($tag);
       if ($tag_id != 0) {
          $ct->untag_object($webit_id, $tag_id);
       }

  $currentTags = $ct->get_object_tags($webit_id);

  echo json_encode($currentTags); 

?>

