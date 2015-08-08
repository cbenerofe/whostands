<?php

/* this php file retrieves tweets from the twiiter api using the codebird library 
it takes three parameters maxid , count and q (query string)  */


require_once('../../dist/codebird.php');

$key = "UNR8M34dO1BIrkUgGQtxA";
$secret = "dNYPZnf4nkbTXhh2uazCzoQ2F8yGHQEQg0jdgMNM";
\Codebird\Codebird::setConsumerKey($key,$secret);

$cb = \Codebird\Codebird::getInstance();

$reply = $cb->oauth2_token();
$bearer_token = $reply->access_token;

 class foo { 
 
   public $pid = ""; 
   public $uname = "";
   public $cat = "";
   public $subcat = "";
   public $story = "";
   public $prodid = "";
   public $price = "";
   public $source = "";
   public $stored = false;

   public $created_at = "";
   public $change_date = "";

   public $picurl = "";
   public $linkurl = "";
   public $embedurl = "";
   public $listype = "";
  }

 class bar {
	
  	 public $sql = "";
	 public $listlen = 0;
	 public $listype = ""; 
         public $newest_date = "";
	 public $newest_twid = "";
	 public $oldest_date = "";
	 public $oldest_twid = "";
	 public $dalist = "";
}

 $rebar = new bar;
 $retarr = array();
 $idarr = array();

 $q = "q=standing desk";
 if (isset($_GET['q'])) {
   $q = $_GET['q'];
   $q = "q=" . $q;
 }
 
 $count = 100;
 if (isset($_GET['count'])) {
	$count = $_GET['count'];
 	$q = $q . "&count=" . $count;
 }

 $maxid = "";
 if (isset($_GET['max_id'])) {
	$maxid = $_GET['max_id'];
 	$q = $q . "&max_id=" . $maxid;
 }


 $reply = $cb->search_tweets($q,true);

 $len = sizeof($reply->statuses);

 $rebar->listlen = $len; 
 $rebar->listype = "unsaved";

 $rebar->newest_twid = $reply->statuses[0]->id_str;
 $rebar->newest_date = $reply->statuses[0]->created_at;
 $rebar->oldest_date = $reply->statuses[$len -1]->created_at;
 $rebar->oldest_twid = $reply->statuses[$len -1]->id_str;

 // get saved tweet ids in range into an array
 
include '../../config/names.php';
/*
$Server = "localhost";
$username = "";
$password = "";
$db_name = "test";
*/

  $con = mysql_connect("$Server", "$username", "$password");
  if (!$con) {
    echo('Could not connect: ' . mysql_error());
  }
  mysql_select_db($db_name, $con);

//  date_default_timezone_set('America/Denver');
  date_default_timezone_set('America/New York');

  $sql="SELECT webit_id FROM dfm_webits where ";
  $probs = false;
  try {
    $dt_new = new DateTime($rebar->newest_date);
    $sql = $sql . " created_at <= '" . date_format($dt_new, 'Y-m-d 23:59:59 ') . "'";
  }
  catch (Exception $e) {
    $probs = true;
  }

  try {
    $dt_old = new DateTime($rebar->oldest_date);
    $sql = $sql . " and created_at >= '" . date_format($dt_old, 'Y-m-d 0:0:1') . "'";
  }
  catch (Exception $e) {
    $probs = true;
  }

  $rebar->sql = $sql; 
  if ($probs == false) {
    $result = mysql_query($sql);
  }

  if ($probs == false) {
    while($row = mysql_fetch_array($result)) {
      $idarr[] =    $row['webit_id'];
    }
  }

  $checklen = sizeof($idarr);
   
    for ($i =0; $i < $len; $i++ ) {

      $d = $reply->statuses[$i];

      if ($d != null) { 

      $foodo = new foo;
 
      $foodo->source = "twitter";
      $foodo->listype = "unsaved";
      $foodo->pid =    $d->id_str;

      // check against saved tweet id  array
      // set stored = true if found
      
      for ($z=0; $z < $checklen; $z++ ) {
	      if ($idarr[$z] == $d->id_str) {
		      $foodo->stored = true;
		      $foodo->listype = "unsorted";
	      }
      }

        $foodo->picurl = $d->user->profile_image_url;

        $foodo->uname = $d->user->screen_name;

        $foodo->story  =  $d->text;

        try {	
	  $datetime = new DateTime($d->created_at);
   //	  $datetime->setTimezone(new DateTimeZone('Europe/Zurich'));
   	  $foodo->created_at = date_format($datetime, 'Y-m-d H:i:s');
       }
        catch (Exception $e) {
          $probs = true;
        }

      $foodo->linkurl = "";
      $foodo->embedurl = "";

      $foodo->urls = array();

      $arr[] = $foodo;

      }
    }
 
   
    $rebar->dalist = $arr;
 
    echo json_encode($rebar);


?> 

