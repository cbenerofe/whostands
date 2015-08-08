<?php
include '../config/names.php';
include 'webit.php';


//error_reporting(E_ERROR);


$con = mysql_connect($Server, $username, $password);
  if (!$con){
    echo('Could not connect: ' . mysql_error());
  }
   mysql_select_db($db_name, $con);

  $summary = new allstats();

  $sql = "";
  $sql = $sql . " select month(w.created_at),year(w.created_at),count(*) from dfm_webits w ";
  $sql = $sql . " left join dfm_webit_tags wt on w.webit_id = wt.webit_id ";
//  $sql = $sql . " where wt.webit_id is null";
  $sql = $sql . " group by month(w.created_at),year(w.created_at)"; 
  $summary->sql =$sql;
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
    $foodo = new stdClass;
    $foodo->month = $row[0] -1;
    $foodo->year = $row[1];
     $foodo->lnum = 0;
    $foodo->cnum = $row[2];
    $foodo->listype = "webits";
    $summary->months[] = $foodo;
  }


  $sql = "";
  $sql= " select group_id,count(*) from dfm_people ";
  $sql = $sql . " group by group_id ";
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
    $foodo = new stdClass;
    $foodo->groupid = $row['group_id'];
     $foodo->lnum = 0;
    $foodo->cnum = $row['count(*)'];
    $foodo->listype = "people";
    $summary->groups[] = $foodo;
  }


  $sql = "";
  $sql= " select count(*) from dfm_people ";
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
	  $summary->total_people = $row[0];
  }


  $sql = "";
  $sql= " select count(*) from dfm_webits where webit_id not in (select webit_id from dfm_webit_tags) ";
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
	  $summary->total_unsorted = $row[0];
  }


  $sql = "";
  $sql= " select count(*) from dfm_webits w, dfm_webit_tags wt, dfm_tags t where w.webit_id = wt.webit_id and wt.tag_id = t.tag_id and t.tag != 'junk' ";
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
	  $summary->total_sorted = $row[0];
  }



  echo json_encode($summary); 

?>

 
