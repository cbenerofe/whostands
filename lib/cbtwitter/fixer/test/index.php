<?php


phpinfo();
echo $_SERVER['HTTP_USER_AGENT'];
if (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE) {
    echo 'You are using Internet Explorer.<br />';
}


?>
