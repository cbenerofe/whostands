<?php
header('Content-type: text/html; charset=utf-8 ');
header('X-Frame-Options: SAMEORIGIN');

require_once('../../lib/codebird.php');
 
$key = "UNR8M34dO1BIrkUgGQtxA";
$secret = "dNYPZnf4nkbTXhh2uazCzoQ2F8yGHQEQg0jdgMNM";
\Codebird\Codebird::setConsumerKey($key,$secret);

$cb = \Codebird\Codebird::getInstance();


$oauth_token = "348400845-Y01gu6GrdaQVaIQi9Mig7Rln2gZwKmJCBNaj2Ok1";
$oauth_token_secret = "uZnzj0TS4gbx460Qj4sVl5vg75MLtzLDl40bAxTIvI";
$cb->setToken($oauth_token,$oauth_token_secret);

//$cb->setToken($_SESSION['oauth_token'], $_SESSION['oauth_token_secret']); 

//$reply = $cb->oauth2_token();
//$bearer_token = $reply->access_token;

?>

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml" >
<head>
</head>
<body style='background-color:silver;' >

<?php 


//  $reply = $cb->users_profileImage_SCREEN_NAME('screen_name=mynetx&size=mini');
//  $reply = $cb->users_profileImage();
  $reply = $cb->statuses_homeTimeline();
//  $reply = $cb->users();

  print_r($reply);

  $reply = $cb->search_tweets('q=standing%20desk',true);
  print_r($reply);

?> 

</body>
</html>

