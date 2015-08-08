<?php
header('Content-type: text/html; charset=utf-8 ');
header('X-Frame-Options: SAMEORIGIN');

require_once('../../lib/codebird.php');
 
$key = "UNR8M34dO1BIrkUgGQtxA";
$secret = "dNYPZnf4nkbTXhh2uazCzoQ2F8yGHQEQg0jdgMNM";
\Codebird\Codebird::setConsumerKey($key,$secret);

$cb = \Codebird\Codebird::getInstance();

session_start();

if (! isset($_GET['oauth_verifier'])) {
    // gets a request token
    $reply = $cb->oauth_requestToken(array(
        'oauth_callback' => 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']
    ));

    // stores it
    $cb->setToken($reply->oauth_token, $reply->oauth_token_secret);
    $_SESSION['oauth_token'] = $reply->oauth_token;
    $_SESSION['oauth_token_secret'] = $reply->oauth_token_secret;

    // gets the authorize screen URL
    $auth_url = $cb->oauth_authorize();
    header('Location: ' . $auth_url);
    die();

} elseif (! isset($_SESSION['oauth_verified'])) {

    // gets the access token
    $cb->setToken($_SESSION['oauth_token'], $_SESSION['oauth_token_secret']);
    $reply = $cb->oauth_accessToken(array(
        'oauth_verifier' => $_GET['oauth_verifier']
    ));
    // store the authenticated token, which may be different from the request token (!)
    $_SESSION['oauth_token'] = $reply->oauth_token;
    $_SESSION['oauth_token_secret'] = $reply->oauth_token_secret;
    $cb->setToken($_SESSION['oauth_token'], $_SESSION['oauth_token_secret']);
    $_SESSION['oauth_verified'] = true;

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

 }

?> 

</body>
</html>

