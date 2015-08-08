<?php


$con = mysql_connect('benman.db.5241208.hostedresource.com', 'benman', 'Letsgo123');
if (!$con)
  {
  echo('Could not connect: ' . mysql_error());
 // die('Could not connect: ' . mysql_error());
  }

mysql_select_db('benman', $con);

$sql="SELECT webit_id FROM dfm_tweets";

$result = mysql_query($sql);

while($row = mysql_fetch_array($result))
  {

  echo  $row['webit_id'] . "|";

  }


mysql_close($con);
?> 
