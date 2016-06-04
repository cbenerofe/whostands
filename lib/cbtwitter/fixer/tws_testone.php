<?php


require_once('twitteroauth/twitteroauth/twitteroauth.php');

require_once('twitteroauth/config.php');


/*
$oauth = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET,
 $_SESSION['oauth_token'],
 $_SESSION['oauth_token_secret']);



$array=$oauth->getAccessToken($_GET['oauth_verifier']) ;

*/
/*Permanent access tokens*/

/*
$_SESSION["access_token"]=$array['oauth_token'];

$_SESSION["access_token_secret"]=$array['oauth_token_secret'];

$_SESSION["username"]=$array['screen_name'];

$_SESSION["userid"]=$array['user_id'];

*/

/* Connect with Twitter API for accessing services */ 




//$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, $_SESSION["access_token"],$_SESSION["access_token_secret"]);
//$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, $access_token,$access_token_secret);
$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET);




?>


<?php 



    $requrl = "statuses/show/227878861034123264";

    $content = $connection->get($requrl);  

   print_r($content);

   $picurl= $content->user->profile_image_url  ; 

     echo   "<img src='". $picurl . "' >";


 

?>

