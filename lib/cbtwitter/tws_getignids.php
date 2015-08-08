<?php


$con = mysql_connect('benman.db.5241208.hostedresource.com', 'benman', 'Letsgo123');
if (!$con)
  {
  echo('Could not connect: ' . mysql_error());
 // die('Could not connect: ' . mysql_error());
  }

mysql_select_db('benman', $con);

$sql="SELECT tw_ignorid FROM ignored_tweets";

$result = mysql_query($sql);

while($row = mysql_fetch_array($result))
  {

  echo  $row['tw_ignorid'] . "|";

  }


mysql_close($con);
?> 