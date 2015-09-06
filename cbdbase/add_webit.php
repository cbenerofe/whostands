<?php
include '../config/names.php';
include 'webit.php';

$ret = new bar();

$pid = 'null';
if (isset($_GET['pid'])) {
  $pid = $_GET['pid']; 
}

$uname = 'null';
if (isset($_GET['uname'])) {
  $uname = $_GET['uname']; 
}

$created_at = 'now()';
if (isset($_GET['created_at'])) {
   $created_at = "\'" . $_GET['created_at'] . "\'";
}

$picurl = "null";
if (isset($_GET['pic'])) {
  $picurl = $_GET['pic']; 
}

$linkurl = "";
if (isset($_GET['link'])) {
   $linkurl = $_GET['link'];
}	

$story = "";
if (isset($_GET['story'])) {
   $story = $_GET['story']; 
}

$embedurl = "";
if (isset($_GET['embed'])) {
  $embedurl = $_GET['embed']; 
}

$source = "";
if (isset($_GET['source'])) {
	$source = $_GET['source']; 
}

if ($pid == 'null') {
   $pid = uniqid();
}

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

      $prefix = "tmpics/";
      $prepos = strpos($picurl,$prefix);
      if (substr($picurl,0,7) == $prefix) {
 
	  $prepos = $prepos + strlen($prefix);
	  $picslice = substr($picurl,$prepos);

	  $cognomen = strrchr($picurl,".");
	  $ret->cognomen = $cognomen;
	  $picfile = $pid;
	  if (strlen($cognomen < 7)) {
	    $picfile = $pid . $cognomen; 
          }
	  $cpsrc = "../../tmpics/" . $picslice;
	  $ret->cpsrc = $cpsrc;
	  $cpdest = "../../pics/" . $picfile;
	  $ret->cpdest = $cpdest;
	  $res = copy ($cpsrc,$cpdest);
	  $ret->cpres = $res;
	  if ($res == true) {
		  $picurl = "/pics/" . $picfile;
          }
      }

     $sql_ins = "insert into dfm_webits values ('','" . $pid . "','" . $source . "','" . $uname . "','" . addslashes($story) .  "'," . $created_at . ", now() ,'" . $picurl . "' ,'" . $linkurl . "','" . $embedurl . "',false )";

     $ret->insql = $sql_ins;    
     $result = mysql_query($sql_ins);
     $ret->inres = $result;    

       $sql= "  SELECT * FROM dfm_webits where uuid='" . $pid . "' ";

     $result = mysql_query($sql);
     $row = mysql_fetch_array($result); 
     $b2 = new foo;

           $b2->webit_id = $row['webit_id'];
           $b2->listype = "webits";
           $b2->pid = $row['uuid'];
           $b2->source =$row['source'];
           $b2->uname = $row['owner_id'];
           $b2->story  =  $row['story'];
	   $b2->created_at = $row['created_at'];
	   $b2->change_date = $row['change_date'];
           $b2->picurl = $row['picurl'];
           $b2->linkurl = $row['linkurl'];
           $b2->embedurl = $row['embedurl'];
       

     $ret->pobj = $b2;

     echo json_encode($ret); 
     mysql_close($con);
?>


