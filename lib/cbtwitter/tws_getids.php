<?php


$con = mysql_connect('benman.db.12765961.hostedresource.com', 'benman', 'Letsgo#123');
if (!$con)
  {
  echo('Could not connect: ' . mysql_error());
 // die('Could not connect: ' . mysql_error());
  }

mysql_select_db('benman', $con);

$sql="SELECT * FROM dfm_webits";

$result = mysql_query($sql);


function check_url($url) {

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HEADER, 1);
    curl_setopt($ch , CURLOPT_RETURNTRANSFER, 1);
    $data = curl_exec($ch);
    $headers = curl_getinfo($ch);
    curl_close($ch);

    return $headers['http_code'];
}


while($row = mysql_fetch_array($result))
{

  $file = $row['picurl'];
  echo  "checking:  " . $row['uuid'] . " " . $file . ":";

/*
  $file_headers = @get_headers($file);
  if($file_headers[0] == 'HTTP/1.1 404 Not Found') {
      $exists = false;
	  echo  $row['uuid'] . " " . $file . "\n";
  }
  else {
      $exists = true;
  }
*/

  $check_url_status = check_url($file);
  if ($check_url_status == '200')
     echo " Link Works \n";
  else
     echo " Broken Link \n";

}


mysql_close($con);
?> 
