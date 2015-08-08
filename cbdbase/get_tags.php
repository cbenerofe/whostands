<?php
include '../config/names.php';
include 'webit.php';
require_once('../lib/craigtags.php');


$tags = "";
if (isset($_GET['tags'])) {
  $tags = $_GET['tags'];
}

$webit_id = "null";
if (isset($_GET['webit_id'])) {
  $webit_id = $_GET['webit_id'];
}

$rebar = new bar();

$con = mysql_connect("$Server", "$username", "$password");

  if (!$con) {
    echo('Could not connect: ' . mysql_error());
  }
   mysql_select_db($db_name, $con);

  $sql = "";
 
if ($webit_id == "null") {

   $sql = $sql .  "SELECT t.tag, count(*) FROM dfm_tags t left join dfm_webit_tags wt";
   $sql = $sql .  " on t.tag_id = wt.tag_id ";
   $sql = $sql .  " group by t.tag_id ";
 
} else {

   $sql = $sql . " SELECT w.webit_id, w.story, t.tag FROM dfm_webits w, dfm_webit_tags wt, dfm_tags t ";
   $sql = $sql . " where w.webit_id = wt.webit_id and wt.tag_id = t.tag_id ";
   $sql = $sql . " and w.webit_id = " . $webit_id ;

}


  $rebar->dasql = $sql;
  $result = mysql_query($sql);

//  $row = mysql_fetch_row($result);

if ($webit_id == "null") {

  $arr = array();

   while($row = mysql_fetch_array($result)) {
    $foodo = new stat;
    $foodo->tag =    $row[0];
    $foodo->cnum =    $row[1];
    $arr[] = $foodo;
   }
   $rebar->dalist = $arr;
   echo json_encode($rebar); 


} else {

   $taglist = array();

   while($row = mysql_fetch_array($result)) {
    $taglist[] = $row[2];
   }
   echo json_encode($taglist); 


}

?>

 
