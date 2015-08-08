
<?php

  $twid="9";


  if(isset($_GET["twid"])) {
    $twid=$_GET["twid"];
  }


  $con = mysql_connect('benman.db.5241208.hostedresource.com', 'benman', 'Letsgo123');

  if (!$con)
    {
    echo('Could not connect: ' . mysql_error());
  }


  mysql_select_db('benman', $con);

  $sql="delete from dfm_tweets ";
  $sql = $sql . "where webit_id='".$twid."'"; 

  echo "<br>". $sql . "<br>" ;

  $result = mysql_query($sql);

  echo $result  ;

  mysql_close($con);


?> 
