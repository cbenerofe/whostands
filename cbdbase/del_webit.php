<?php
include '../config/names.php';
include 'webit.php';

$source = $_GET['source'];
$uname = $_GET['uname'];
$listype = $_GET['source'];

$pid = 'null';
$pid = $_GET['pid'];

$con = mysql_connect($Server, $username, $password);

   mysql_select_db($db_name, $con);

 $sql_upd="";
 $ret = new foo();

  if ($pid != 'null') {

      $sql_upd = "delete from dfm_webits  ";
      $sql_upd = $sql_upd . " where uuid ='" . $pid . "'";
/*
      $ret->picfile = "../../pics/keepers/" . $pid . "\.*";
      foreach(glob($ret->picfile) as $filename) {
        unlink($filename);
      }
 */

//   echo $sql_upd  . " \n <br> " ;
    $result = mysql_query($sql_upd);
    $ret->sql = $sql_upd;
    $ret->dbdres = $result;
    $ret->pid = $pid;
    echo json_encode($ret); 
  }

?>

 
