<?php
include '../config/names.php';
include 'webit.php';

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
 
   $sql =  " SELECT w.webit_id, w.story, t.tag FROM dfm_webits w, dfm_webit_tags wt, dfm_tags t ";
   $sql = $sql . " where w.webit_id = wt.webit_id and wt.tag_id = t.tag_id ";
   $sql = $sql . " and w.webit_id = " . $webit_id ;

  $rebar->dasql = $sql;
  $result = mysql_query($sql);

  $arr = array();

   while($row = mysql_fetch_array($result)) {
    $arr[] = $row[2];
   }

   $foodo = new foo;
 
   $foodo->tags = $arr;

   $sql = " SELECT * FROM dfm_webits ";
   $sql = $sql . " where webit_id = " . $webit_id ;

  $rebar->dasql2 = $sql;
  $result = mysql_query($sql);

  $row = mysql_fetch_array($result);

   $foodo->listype = "webits";
    $foodo->webit_id =    $row[0];
    $foodo->pid =    $row['uuid'];
    $foodo->picurl = $row['picurl'];
    $foodo->source = $row['source'];
    $foodo->uname = $row['owner_id'];
    $foodo->story  = htmlspecialchars($row['story']);
    $foodo->created_at = $row['created_at'];
    $foodo->linkurl = $row['linkurl'];
    $foodo->embedurl = $row['embedurl'];
    $foodo->urls = array();

    $rebar->pobj = $foodo;

   echo json_encode($rebar); 

?>

 
