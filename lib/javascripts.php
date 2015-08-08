<?php
   //sets the content type to javascript 
   header('Content-type: text/javascript');

   foreach(glob("cbjsview/qandas/*.js") as $file) {
      readfile($file);
   }

   foreach(glob("cbjsview/unitview/*.js") as $file) {
      readfile($file);
   }

   foreach(glob("cbjsview/*.js") as $file) {
      readfile($file);
   }

   foreach(glob("*.js") as $file) {
      readfile($file);
   }


?>
