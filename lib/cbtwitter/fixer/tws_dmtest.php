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


   $connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, $_SESSION["access_token"],$_SESSION["access_token_secret"]);


     echo('<html><body>');
 
echo "hi";
     
// Send a direct message
$options = array("screen_name" => "craigbenerofe", "text" => "Hey that's my message");
$connection->post('1/direct_messages/new', $options);

     echo('</body></html>');


?>
