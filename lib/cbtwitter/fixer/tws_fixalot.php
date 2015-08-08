<?php

require_once('twitteroauth/twitteroauth/twitteroauth.php');

require_once('twitteroauth/config.php');



$oauth = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET,
 $_SESSION['oauth_token'],
 $_SESSION['oauth_token_secret']);



$array=$oauth->getAccessToken($_GET['oauth_verifier']) ;


/*Permanent access tokens*/


$_SESSION["access_token"]=$array['oauth_token'];

$_SESSION["access_token_secret"]=$array['oauth_token_secret'];

$_SESSION["username"]=$array['screen_name'];

$_SESSION["userid"]=$array['user_id'];



/* Connect with Twitter API for accessing services */ 




$con = mysql_connect('benman.db.5241208.hostedresource.com', 'benman', 'Letsgo123');
  if (!$con)  {
     echo('Could not connect: ' . mysql_error());
  }

    mysql_select_db('benman', $con);

$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, $_SESSION["access_token"],$_SESSION["access_token_secret"]);



   $sql="SELECT * FROM standing_tweets where twpicurl = '' ";

   $biglist = mysql_query($sql);

   $counter = 0;

  while($row = mysql_fetch_array($biglist))   {


    $twid = $row['twid'];

    echo  $twid  . "-" . $biglist['tweeter'] . "<br>";

    $requrl = "statuses/show.json?id=".$twid;

    $content = $connection->get($requrl);  

    $picurl= $content->user->profile_image_url  ; 
     echo   $picurl;
     $sql_upd = "update standing_tweets set twpicurl = '".$picurl ."'  where twid ='".$twid."'";

    $result = mysql_query($sql_upd);
     echo "result: " . $result ;


   $ts = strtotime( $content->created_at );
 

    $tstr = date('Y-m-d h:m:s');
 
     $sql_upd = "update standing_tweets set twdate = '".$tstr ."'  where twid ='".$twid."'";

  
 
    $result = mysql_query($sql_upd);
     echo "result: " . $result ;

 
  }



mysql_close($con);
 


?>
