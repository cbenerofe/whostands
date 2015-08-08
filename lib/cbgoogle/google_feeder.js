

function google_feeder () { 

   this.varname = "louie.google_feed";
   this.sterms = "standing desk";

}


google_feeder.prototype.draw_btns = function() {

   var tmp = "";
   var pobj = null;
   var lbl = "";
   var ocl="";
   var dt = null;
      
   lbl = "feed_btns";
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;
      $('#'+lbl);
   } 

}


google_feeder.prototype.get_images  = function (qry_str) {

}



google_feeder.prototype.next_set  = function () {
 
}


google_feeder.prototype.prev_set  = function () {
  
}



