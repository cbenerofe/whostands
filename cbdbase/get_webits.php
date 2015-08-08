<?php
include '../config/names.php';
include 'webit.php';

 $rebar = new bar();
 $limit = 1000;
 $chunk = 0;

if (isset($_GET['chunk'])) {
  $chunk = $_GET['chunk'];
}
$rebar->dachunk = $chunk;

if (isset($_GET['lim'])) {
  $limit = $_GET['lim'];
}

$sterms = "";
if (isset($_GET['sterms'])) {
  $sterms = $_GET['sterms'];
}

$uname = "null";
if (isset($_GET['uname'])) {
  $uname = $_GET['uname'];
}

$month = "null";
if (isset($_GET['month'])) {
  $month = $_GET['month'];
  $rebar->month = $month -1;
}

$year = "null";
if (isset($_GET['year'])) {
  $year = $_GET['year'];
  $rebar->year = $year;
}

$random = "null";
if (isset($_GET['random'])) {
  $random = true;
}

$unsorted = "null";
if (isset($_GET['unsorted'])) {
  $unsorted = "true";
  $rebar->listype = "unsorted";
} else {
 $rebar->listype = "webits";
}

$rebar->dachunk = $chunk;
$chunk_start = $chunk * $limit;

$con = mysql_connect("$Server", "$username", "$password");

  if (!$con) {
    echo('Could not connect: ' . mysql_error());
  }
   mysql_select_db($db_name, $con);

  $sql = "";
  $sql= $sql . "  SELECT  SQL_CALC_FOUND_ROWS  * FROM dfm_webits w left join dfm_webit_tags wt";
  $sql = $sql .  " on w.webit_id = wt.webit_id ";
 
  $wheres = false;

  if ($unsorted != "null" ) {
    $sql = $sql . " where wt.webit_id is null  ";
    $wheres = true;
 }
 
  if ($uname != "null" ) {

    $rebar->uname = $uname;
    if ($wheres == true) {
     $where = $where . " and " ;
    } else {
      $where = $where . " where " ;
    }
   $where = $where . " w.owner_id = '" . $uname . "' ";
    $wheres = true;

  } else {

    if ($sterms != "" ) {
      $rebar->sterms = $sterms;
      if ($wheres == true) {
       $where = $where . " and " ;
      } else {
	$where = $where . " where " ;
      }
      $where = $where . " lower(w.story) like lower('%" . $sterms . "%')";
      $where = $where . " or lower(w.owner_id) like lower('%" . $sterms . "%') ";
      $wheres = true;
   }
  }

   if ($month != "null") {
       if ($wheres == true) {
       $where = $where . " and " ;
      } else {
	$where = $where . " where " ;
      }
       $where = $where . " month(w.created_at) = $month ";
       $wheres = true;
   }
   if ($year != "null") {
        if ($wheres == true) {
       $where = $where . " and " ;
      } else {
	$where = $where . " where " ;
      }
      $where = $where . " year(w.created_at) = $year ";
       $wheres = true;
   }


  $sql = $sql . $where;

  if ($random != "null") {
    $sql= $sql . " ORDER BY rand() "; 
  } else {
    $sql= $sql . " ORDER BY created_at desc "; 
  }

  $sql= $sql . " LIMIT " . $chunk_start . " , " . $limit;

 // echo $sql . " \n <br> " ;
  $rebar->dasql = $sql;
  $result = mysql_query($sql);

  $result2 = mysql_query('select found_rows()');
  $row2 = mysql_fetch_row($result2);
  $num_rows = $row2[0];
  $rebar->dalist_len = $num_rows;
  $arr = array();

  while($row = mysql_fetch_array($result)) {

    $foodo = new foo;
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

    $arr[] = $foodo;
   }
   $rebar->dalist = $arr;

   echo json_encode($rebar); 

?>

 
