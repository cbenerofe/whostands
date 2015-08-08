<?php
header('Content-type: text/html; charset=utf-8 ');
//header('X-Frame-Options: SAMEORIGIN');
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<title>whostandsup admin</title>

<script  type="text/javascript" >
  var debug = false;
  var netson = false;
  var jqm_off = false;
  var buddah = false;
  var is_mobile = false;
  var main_shape = "";
  var pname = "";
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

<script type="text/javascript" >

  var daviewer = null;
  var da_limit=1000;

  var nicky = null;  //sharer
  var wanda = null;  //searcher
  var robby = null;  //grouper
  var amare = null;  //stater
  var sal = null;    //logoman
  var mac = null;    //farmer
  var louie = null;  //feeder 
  var adoni = null;  //creator 

  var init_run = true;
  var got_stats = false;

</script>

<script src="lib/cbtwitter/tws_feeder.js" type="text/javascript" ></script>
<script src="lib/cbgoogle/google_feeder.js" type="text/javascript" ></script>
<script src="http://platform.twitter.com/widgets.js" type="text/javascript" ></script>

<script src="lib/javascripts.php" type="text/javascript" ></script>

</head>

<body style='background-color:white;' >
<!--script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script-->

<div id="fb-root"></div>

<div data-role="page" data-theme="a" >

     <div id='head_spot' style='' class='' data-position='fixed'  data-role='header' data-theme='a'  >
       <div id='menu_spot' style='' class='' >
       </div>
       <div style="clear:right;" ></div>
     </div>

     <div data-role='content'  class='' style='padding:0;'  >
 
    <div id='tag_spot'  class=''  style=''   >
    </div>


       <div data-role=''  class='ui-grid-a' style=''  >
         <div id='adside_bar' class='ui-block-a' style=''  >
         </div>
         <div id='admain_spot'  class='ui-block-b'  style=''   >
         </div>
       </div>
     </div>

   <div id='foot_spot' style='' data-position='fixed'  data-role='footer' data-theme='a'  >
   </div>

</div>

<script type='text/javascript' >

/*
  if (netson == true) {
   FB.init({
      appId  : '191528434226668',
      status : true, // check login status
      cookie : true, // enable cookies to allow the server to access the session
      xfbml  : true,  // parse XFBML
      oauth  : true
   });
      // Load the SDK asynchronously
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
  }
*/
//   do_preload();

   buddah=true;

   amare = new stater("cbdbase/");
   daviewer = new viewer("admain_spot","daviewer");
   
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
 
	   sal = new logoman("logo");
 	   dale = new rail("rail");

	   mac = new sorter("sort");
	   louie = new feeder("feed");
	   wanda = new searcher("search");
	   nicky = new sharer("share");
           robby = new grouper("group");
           adoni = new creator("create");


    diego = new adminheader();
    diego.show();

    amare.get_stats();

//    amare.get_people();

    var dt = new Object();
    dt.month = "all";
    dt.year="";

    amare.get_webits(dt);
//    amare.get_webits();
 
      $(window).resize(function(val) {
          daviewer.recalc_gridcols();
          var lshape = "thin";
          if ($(window).width() > 800) { lshape = 'wide'; } 
          if (main_shape != lshape) {
            main_shape = lshape;
            diego.set_tool();
          }
      });

      $(document).ready(function() {
         $(window).resize();
      });


</script>

</body>

</html>


