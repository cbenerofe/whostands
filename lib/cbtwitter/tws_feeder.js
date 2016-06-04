

function tw_feeder () { 

   this.varname = "louie.twitter_feed";
   this.sterms = "standing desk";

   this.newest_date = "";
   this.newest_twid = "";
   this.oldest_date = "";
   this.oldest_twid = "";
}


tw_feeder.prototype.draw_btns = function() {

   var tmp = "";
   var pobj = null;
   var lbl = "";
   var ocl="";
   var dt = null;
      
     if (this.oldest_date != "") {
        ocl='louie.twitter_feed.prev_set();';
       tmp = tmp + "<button  data-role='button' data-inline='true'  onclick='"+ocl+"' style='vertical-align:top;' data-mini='true'  >";
         tmp = tmp + "<img id='' src='images/left_arrow_circle.png'  class='menu_btn' >";
         tmp = tmp + "</button>";

         if (debug == true) {
           tmp = tmp + "<span class='spotd_off' >";
	   dt = new Date(this.oldest_date);
           tmp = tmp + dt.getMonth();
    	   tmp = tmp + " ";
           tmp = tmp + dt.getDate();
  	   tmp = tmp + ":";
           tmp = tmp + dt.getMinutes();
           tmp = tmp + "</span>"; 
         }
      }	 

 
     if (this.newest_date != "") {
       if (debug == true) {
         tmp = tmp + "<span class='spotd_off' >";
         tmp = tmp + "newer";
	 dt = new Date(this.newest_date);
         tmp = tmp + dt.getMonth();
  	 tmp = tmp + " ";
         tmp = tmp + dt.getDate();
  	 tmp = tmp + ":";
         tmp = tmp + dt.getMinutes();
         tmp = tmp + "</span>";
       }
          ocl='louie.twitter_feed.next_set();';
          tmp = tmp + "<button  data-role='button' data-inline='true'  onclick='"+ocl+"' style='vertical-align:top;' data-mini='true'  >";
          tmp = tmp + "<img id='' src='images/right_arrow_circle.png'  class='menu_btn' >";
          tmp = tmp + "</button>";
     }

    if (this.oldest_twid != "") {
        ocl =  "louie.save_set();";
        tmp = tmp + "<button  data-role='button' data-inline='true'  onclick='"+ocl+"' style='vertical-align:top;' data-mini='true'  >";
        tmp = tmp + "<img id='' src='images/cogs.png'  class='menu_btn' >";
        tmp = tmp + "</button>";
     }

   lbl = "feed_btns";
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;
      $('#'+lbl);
   } 

}


tw_feeder.prototype.get_live_tweets  = function (qry_str) {
     var qe = "";
     if (qry_str != undefined) {
	this.sterms = qry_str;
     } 
     qe = "?q=" + escape(this.sterms);

     var count = 100;
     if ((is_mobile == true) || (debug == true)) {
       count=10;
     }
     qe = qe + "&count=" + count;

     var url='';
     url = 'lib/cbtwitter/tws_search.php' + qe;
//     alert(url);

     $.getJSON(url,function(json) {
        louie.twitter_feed.newest_twid = json.newest_twid;
	    louie.twitter_feed.newest_date = json.newest_date;
        louie.twitter_feed.oldest_twid = json.oldest_twid;
	    louie.twitter_feed.oldest_date = json.oldest_date;
	    louie.twitter_feed.draw_btns();
        amare.add_unsaved(json);
     }); 
      sal.waiting();  

}



tw_feeder.prototype.next_set  = function () {

   var qe = "";
     if (this.sterms != "" ) {
 	qe = "?q=" + escape(this.sterms);
     } 

     var count = 100;
     if (is_mobile == true) {
       count=10;
     }
     qe = qe + "&count=" + count;

    if (this.newest_twid != "" ) {
 	qe = qe + "&since_id=" + this.newest_twid;
     } 

     var url='';
     url = 'lib/cbtwitter/tws_search.php' + qe;
//     alert(url);
 
     $.getJSON(url,function(json) {

        louie.twitter_feed.newest_twid = json.newest_twid;
	louie.twitter_feed.newest_date = json.newest_date;
        louie.twitter_feed.oldest_twid = json.oldest_twid;
	louie.twitter_feed.oldest_date = json.oldest_date;

	louie.twitter_feed.draw_btns();

        amare.add_unsaved(json);

     });    
      sal.waiting();  


}


tw_feeder.prototype.prev_set  = function () {
  
  var qe = "";
     if (this.sterms != "" ) {
 	qe = "?q=" + escape(this.sterms);
     } 

     var count = 100;
     if (is_mobile == true) {
       count=10;
     }
     qe = qe + "&count=" + count;

    if (this.oldest_twid != "" ) {
 	qe =  qe + "&max_id=" + this.oldest_twid;
     } 

     var url='';
     url = 'lib/cbtwitter/tws_search.php' + qe;
//     alert(url);
 
     $.getJSON(url,function(json) {

        louie.twitter_feed.newest_twid = json.newest_twid;
	louie.twitter_feed.newest_date = json.newest_date;
        louie.twitter_feed.oldest_twid = json.oldest_twid;
	louie.twitter_feed.oldest_date = json.oldest_date;

	louie.twitter_feed.draw_btns();

        amare.add_unsaved(json);

     });  
      sal.waiting();  


}



