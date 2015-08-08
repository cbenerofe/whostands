<?php
header('Content-type: text/html; charset=utf-8 ');
//header('X-Frame-Options: SAMEORIGIN');
?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#" >

<head>
<title>whostandsup.com</title>
<meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' >

<script  type="text/javascript" >
  var debug = false;
  var netson = false;
  var is_ie = false;
  var jqm_off = false;
  var buddah = false;
  var pname = "";
  var is_mobile = false;
  var shape = "thin";
  var twittr = null;
</script>

<?php
  require_once 'dist/Mobile_Detect.php';
  $detect = new Mobile_Detect;
  $deviceType = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'phone') : 'computer');
  if ($detect->isMobile() == true) {   
?>
  <script  type="text/javascript" >
     is_mobile = true;
  </script>
<?php   } ?>

<?php   if (isset($_GET['mobile'])) {   ?>
<script  type="text/javascript" >
     is_mobile = true;
</script>
<?php  } ?>

<script src="dist/jquery-1.9.1.min.js" ></script>

<?php   if (isset($_GET['jqmoff'])) {   ?>
<script  type="text/javascript" >
   jqm_off = true;
   main_shape = "mini";
</script>

<?php  } else {  ?>

   <link rel=StyleSheet href='dist/css/jquery.mobile-1.4.5.min.css' type="text/css" media="screen,print" />
   <script src="dist/jquery.mobile-1.4.5.min.js" ></script>

<?php  }  ?>


<?php   if (isset($_GET['debug'])) {   ?>
<script  type="text/javascript" >
   debug = true;
</script>
<?php  } ?>

<link rel=StyleSheet href='css/base.css' type="text/css" media="screen,print" />
<link rel=StyleSheet href='css/mini.css' type="text/css" media="screen,print" />
<link rel=StyleSheet href='css/reg.css' type="text/css" media="screen,print" />
<link rel=StyleSheet href='css/wide.css' type="text/css" media="screen,print" />

<script  type="text/javascript" >

  var daviewer = null;
  var da_limit=1000;

  var nicky = null;  //sharer
  var wanda = null;  //searcher
  var amare = null;  //stater
  var sal = null;    //logoman
  var diego = null;  //header
  var louie = null;  //feeder 
  var jesie = null;  //namer
  var dale = null;   //rail 

  var init_run = true;
  var got_stats = false;
</script>


<script src="lib/cbtwitter/tws_feeder.js" type="text/javascript" ></script>
<script src="lib/cbgoogle/google_feeder.js" type="text/javascript" ></script>
<script src="http://platform.twitter.com/widgets.js" type="text/javascript" ></script>

<script src="lib/javascripts.php" type="text/javascript" ></script>

</head>

<body style='background-color:white;' >

<div id="fb-root"></div> 

<div data-role="page" data-theme="a" >
    <div id='head_spot' style='' class=''  data-position='fixed'  data-role='header' data-theme='a'  >

      <div id='menu_spot' style='' class='' >
      </div>
      <div style='clear:right;' ></div>

    </div>

    <div id='tag_spot'  class=''  style=''   >
    </div>

    <div id='main_spot'  class=''  style=''   >
    </div>

    <div id='foot_spot' style='' data-position='fixed'  data-role='footer' data-theme='a'  >
    </div>
</div>

<script type='text/javascript' >

  do_preload();

        sal = new logoman("logo");
	dale = new rail("rail");
        nicky = new sharer("share");
 	wanda = new searcher("search");

        amare = new stater("cbdbase/");

        daviewer = new viewer("main_spot","daviewer");

        if (is_mobile == true) {
           da_limit = 100;
           daviewer.top_end = 25;
        } else {
           da_limit = 1000;
	   daviewer.top_end = 100;
       }

      if (debug == true) {
           da_limit = 10;
	   daviewer.top_end = 5;
      } 
 
     amare.get_stats();
     amare.get_webits();

	diego = new header();
	diego.show();

    if (jqm_off == false) {
      $.mobile.popup.prototype.options.history = false;

      $(window).resize(function(val) {
          daviewer.recalc_gridcols();
      });

      $(document).ready(function() {
         $(window).resize();
      });

    }

/*
  var audiochannels = new Array();
  if (is_ie == false) { 
    for (a=0;a<max_channel;a++) {
      audiochannels[a] = new Array();
      audiochannels[a]['channel'] = new Audio();
      audiochannels[a]['finished'] = -1;
     }
  }
*/

</script>

</body>
</html>


