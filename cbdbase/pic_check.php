<?php


$picsrc = "";
if (isset($_GET['picode'])) {
  $picsrc = $_GET['picode']; 
}


$pid = uniqid();
$prefix = "";
$prepos = "";
$picslice = "";
$picaddr = "";
$cogpos = "";
$cognomen = "";
    
if (($picsrc != "null" ) && ($picsrc != ""))  {
	   echo "picsrc: " . $picsrc . "<br>";

	  $prefix = "/pics/tmp/";          
	   $prepos = strpos($picsrc,$prefix);
	   $prepos = $prepos + strlen($prefix);
	  echo "prepos: " . $prepos . "<br>";

	  $picslice = substr($picsrc,$prepos);
	  echo "picslice: " . $picslice . "<br>";

	  $cognomen = strrchr($picsrc,".");
	  echo "cognomen" . $cognomen;
	  $picfile = $pid;
	  if (strlen($cognomen < 7) {
	    $picfile = $pid . $cognomen; 
          }
	  $cpsrc = "../../pics/tmp/" . $picslice;
 	 echo "source" . $cpsrc . "<br>";

	  $cpdest = "../../pics/keepers/" . $picfile;
	 echo "dest: " . $cpdest . "<br>";

	  $res = copy ($cpsrc,$cpdest);
	  echo "result: " . $res . "<br>";
	  if ($res == true) {
		  $picaddr = "/pics/keepers/" . $picfile;
	  }:w

      }

  
?>


