<?php

require_once('twitteroauth/twitteroauth/twitteroauth.php');

require_once('twitteroauth/config.php');


try {
 
$oauth = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET);


$con = mysql_connect('benman.db.12765961.hostedresource.com', 'benman', 'Letsgo#123');
  if (!$con)  {
     echo('Could not connect: ' . mysql_error());
  }

    mysql_select_db('benman', $con);

   // a new MongoDB connection
    $congo = new Mongo('localhost');

    // connect to stando database
    $webit_collection = $congo->selectCollection("stando","webits");
 

   $sql="SELECT * FROM dfm_webits where source = 'twitter' and jsoned = false limit 500 ";

   $biglist = mysql_query($sql);

//   $counter = 0;

/*
  $insertOptions = array(
      'safe'    => true,
      'fsync'   => true,
      'timeout' => 10000
  );
*/

  while($row = mysql_fetch_array($biglist))   {


    $twid = $row['uuid'];

    echo  $twid  . "-" . $biglist['owner_id'] . "\n";

    $requrl = "statuses/show/".$twid;

    $content = $oauth->get($requrl);  


    print_r($content);
     if (property_exists($content,"id")) {
//      $content->_id = $content->id;
      $results = $webit_collection->insert($content);
//    $results = $webit_collection->insert($tweet);
    print_r($results);


      $sql_upd = "update dfm_webits set jsoned = true  where uuid ='".$twid."'";

      $result = mysql_query($sql_upd);
      echo "result: " . $result ;
 
    } else {
      echo "some error";
    }
 
//    readline("continue...");

  }

  mysql_close($con);
} 

catch ( Exception $e )
{
    echo $e->getMessage();
}



?>
