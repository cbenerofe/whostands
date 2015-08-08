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
  if(isset($_GET["twpicurl"])) {
    $twpicurl=$_GET["twpicurl"];
  }
  if(isset($_GET["twdate"])) {
    $twdate=$_GET["twdate"];
  }
  if(isset($_GET["twtext"])) {
    $twtext=$_GET["twtext"];
  }

  $con = mysql_connect('benman.db.5241208.hostedresource.com', 'benman', 'Letsgo123');
  if (!$con) {
    echo('Could not connect: ' . mysql_error());
  }

  mysql_select_db('benman', $con);

  $sql="insert into dfm_tweets ";
  $sql = $sql . "(webit_id,owner_id,picurl,story,twdate) ";
  $sql = $sql . "values ('".$twid."','".$twuser."','".$twpicurl."','".$twtext."','".$twdate."')";
  echo "<br>". $sql . "<br>" ;

  $result = mysql_query($sql);
  echo $result  ;

  mysql_close($con);

?> 
