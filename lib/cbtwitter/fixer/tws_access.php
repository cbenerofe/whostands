<?php

/* Start session and load library. */

session_start();
session_destroy();
session_start();

require_once('twitteroauth/twitteroauth/twitteroauth.php');

require_once('twitteroauth/config.php');

/* Build TwitterOAuth object with client credentials. */

$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET);

 /* Get temporary credentials. */


$twid = $_GET['twid'];


if ($_GET['command'] == 'test') {
  $request_token = $connection->getRequestToken('http://www.deskfm.com/deskfm/twitter/fixer/tws_testone.php');
}

if ($_GET['command'] == 'fixone') {
  $request_token = $connection->getRequestToken('http://www.deskfm.com/deskfm/twitter/fixer/tws_fixone.php?twid='.$twid);
}


if ($_GET['command'] == 'fixalot') {
  $request_token = $connection->getRequestToken('http://www.deskfm.com/deskfm/twitter/tws_fixalot.php');
}



/* Save temporary credentials to session. */

$_SESSION['oauth_token'] = $token = $request_token['oauth_token'];

$_SESSION['oauth_token_secret'] = $request_token['oauth_token_secret'];



/* If last connection failed don't display authorization link. */

switch ($connection->http_code) {

  case 200:

    /* Build authorize URL and redirect user to Twitter. */

    $url = $connection->getAuthorizeURL($token);
    header("Location: {$url}"); 
 //   echo "<a href='".$url."'>Login With Twitter</a>";

    break;

  default:

    /* Show notification if something went wrong. */

    echo 'Could not connect to Twitter. Refresh the page or try again later.';

}
