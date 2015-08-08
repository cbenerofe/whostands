
<?php


  $twid="9";
  $twuser="dunk";
  $twdate="0-0-00";
  $twtext="nothing";


  if(isset($_GET["twid"])) {
    $twid=$_GET["twid"];
  }

  if(isset($_GET["twuser"])) {
    $twuser=$_GET["twuser"];
  }


  $con = mysql_connect('benman.db.5241208.hostedresource.com', 'benman', 'Letsgo123');

  if (!$con)
    {
    echo('Could not connect: ' . mysql_error());
  }



  mysql_select_db('benman', $con);

  $sql="insert into ignored_tweets ";
  $sql = $sql . "(tw_ignorid,person_id) ";
  $sql = $sql . "values ('".$twid."','".$twuser."')";


  echo "<br>". $sql . "<br>" ;

  $result = mysql_query($sql);


  echo $result  ;


  mysql_close($con);

   echo "</body>";

   echo "</HTML>";


?> 
