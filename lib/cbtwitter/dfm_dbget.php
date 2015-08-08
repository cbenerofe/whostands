<?php


 class foo { 
 
   public $from_user ; 
   public $id_str ;
   public $text  ;
   public $created_at ;
   public $profile_image_url ;
   public $source;
   public $state ;
   public $hide ;
 
  }



$yr = $_GET['yr'];
$mon = $_GET['mon'];
$chip = $_GET['chip'];
$week = $_GET['week'];
$limit = $_GET['lim'];


$chip = $chip * $limit;


$con = mysql_connect('benman.db.5241208.hostedresource.com', 'benman', 'Letsgo123');
if (!$con)
  {
  echo('Could not connect: ' . mysql_error());
  }

mysql_select_db('benman', $con);

$where = " where Month(twdate) = " . $mon . " ";
$where = $where . " and Year(twdate) = 20" . $yr . " ";


if ($week == "1") {
  $where = $where . " and Day(twdate) <= 7 ";
}

if ($week == "2") {
  $where = $where . " and Day(twdate) > 7 ";
  $where = $where . " and Day(twdate) <= 14 ";
}

if ($week == "3") {
  $where = $where . " and Day(twdate) > 14 ";
  $where = $where . " and Day(twdate) <= 21 ";
}

if ($week == "4") {
  $where = $where . " and Day(twdate) > 21 ";
}

$sql="SELECT * FROM dfm_tweets ". $where . " LIMIT " . $chip . " , " . $limit;

 $result = mysql_query($sql);


$counter = 0;
$row_counter = 0;
$i = 0;

$arr = array();

$first = true;

while($row = mysql_fetch_array($result))
  {

  $bar = new foo;

 
  $bar->from_user =    $row['owner_id']      ;

  $bar->id_str    =   $row['webit_id']       ;

  $tmp = $row['story'];
  $tmp2 = str_replace("\n","",$tmp);

  $bar->text    =   $tmp2      ;

  $bar->created_at    =   $row['twdate']       ;
  $bar->profile_image_url   =    $row['linkurl']       ;

  $bar->source = "twitter" ;

  $bar->state = "stored" ;
  $bar->hide = "false" ;

 $arr[] = $bar;

  }

echo json_encode($arr); 

?> 
