<?php
include '../config/names.php';
include 'webit.php';


$ret = new bar;

$uname = 'null';
if (isset($_GET['uname'])) {
  $uname = $_GET['uname']; 
}


$groupid = "";
if (isset($_GET['groupid'])) {
	$prodid = $_GET['groupid']; 
}


$picsrc = "";
if (isset($_GET['picode'])) {
  $picsrc = $_GET['picode']; 
}


$pid = uniqid();

$picaddr = "";

     $con = mysql_connect($Server, $username, $password);
      mysql_select_db($db_name, $con);
      $np = false;

      if ($uname == 'null' )  {

        $uname = uniqid();
        $sql_ins = "insert into dfm_people values ('" . $uname . "','','','','','','','',now())";
        $ret->npsql = $sql_ins;    
        $result = mysql_query($sql_ins);
        $ret->npres = $result;    
     }

     if (($picsrc != "null" ) && ($picsrc != ""))  {

	  $prefix = "/pics/tmp/";          
	   $prepos = strpos($picsrc,$prefix);
	   $prepos = $prepos + strlen($prefix);

	  $picslice = substr($picsrc,$prepos);

	   $cognomen = strrchr($picsrc,".");
	   $ret->cognomen = $cognomen;
	  $picfile = $pid;
	  if (strlen($cognomen < 7)) {
	    $picfile = $pid . $cognomen; 
          }
	  $cpsrc = "../../pics/tmp/" . $picslice;
	  $ret->cpsrc = $cpsrc;
	  $cpdest = "../../pics/keepers/" . $picfile;
	  $ret->cpdest = $cpdest;
	  $res = copy ($cpsrc,$cpdest);
	  $ret->cpres = $res;
	  if ($res == true) {
		  $picaddr = "/pics/keepers/" . $picfile;
	  }

     }


     $result = mysql_query($sql);
     $row = mysql_fetch_array($result); 
         $b2 = new foo;
         if ($source == "people") {

           $b2->uname = $row['person_id'];
           $b2->dfdate = $row['twdate'];
           $b2->picurl = $row['picurl'];
           $b2->groupid = $row['group_id'];
         }
       

     $ret->pobj = $b2;

     echo json_encode($ret); 
     mysql_close($con);
?>


