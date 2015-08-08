

<?php


  $query = "standing desk";
 
  if ($_POST) {
    $query = $_POST['query'];
  }
 
  $curl = curl_init();

  curl_setopt ($curl, CURLOPT_URL, "http://search.twitter.com/search.json?q=" . urlencode($query) . "&rpp=100");
  curl_setopt ($curl, CURLOPT_RETURNTRANSFER, 1);
 
  $result = curl_exec ($curl);
  curl_close ($curl);
 
  //header('Content-Type: application/xml; charset=ISO-8859-1');
 
  print $result;
?>