<?php
include '../config/names.php';
include 'webit.php';


 $rebar = new bar;

$limit = 1000;

$chunk = 0;
if (isset($_GET['chunk'])) {
  $chunk = $_GET['chunk'];
}
$rebar->dachunk = $chunk;

if (isset($_GET['lim'])) {
  $limit = $_GET['lim'];
}
$chunk_start = $chunk * $limit;

$groupid = ""; 
if (isset($_GET['groupid'])) {
 $groupid = $_GET['groupid'];
}

$con = mysql_connect($Server, $username, $password);
if (!$con) {
    echo('Could not connect: ' . mysql_error());
}

   mysql_select_db($db_name, $con);
  $sql = "";
  $where = "";

   $sql= " select * from dfm_people ";

   if ($groupid != "" ) {
      $sql = $sql . " where group_id = '" .  $groupid. "'";
   } 

  $sql= $sql . " LIMIT " . $chunk_start . " , " . $limit;

  $rebar->dasql = $sql;
  $result = mysql_query($sql);
  $arr = array();

  $rebar->listype="people";

  while($row = mysql_fetch_array($result)) {
    $foodo = new foo;
    $foodo->uname = $row['person_id'];
    $foodo->groupid = $row['group_id'];
    $foodo->picurl = $row['picurl'];
    $foodo->emailaddr = $row['emailaddr'];
    $foodo->facebookid = $row['facebookid'];
    $foodo->twitter = $row['twitterid'];
    $foodo->googleid = $row['googleid'];
    $foodo->source = "person";
    $foodo->listype = "people";
    $arr[] = $foodo;
  }

  $rebar->peoplelist = $arr;

  echo json_encode($rebar); 

?>

 
