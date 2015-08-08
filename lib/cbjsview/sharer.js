
function sharer (pspotid) {

   this.spotid = pspotid + "_spot";
   this.varname = "nicky";
   this.showing = false;
   this.shape = "";  
}


sharer.prototype.show = function() {
    var lbl = "";
    var tmp = "";
 
	tmp += "<div id='social' style='display:inline;vertical-align:middle;' >";
 	tmp += "   <div class='plusone'>";
 	tmp += "   <g:plusone size='medium' annotation='none'></g:plusone>"
 	tmp += "   </div>";
 	tmp += "   <div class='twitter'>";
 	tmp += "   <a href='https://twitter.com/share' class='twitter-share-button' data-count='none' data-via='' >Tweet</a>";  
 	tmp += "   </div>";
 	tmp += "   <div class='fb-like' data-send='false' data-layout='button_count' data-width='90' data-show-faces='false' data-href='http://www.whostandsup.com' ></div>";
	tmp += "</div>";


    lbl = "share_spot";
    $('#'+lbl).html(tmp);
    this.showing = true;
//    this.fb_render();
    this.gplus_render();
    this.twitter_render();
}


sharer.prototype.share_this = function() {

	var tmp = "";
	var lbl = "";
        var ocl = "";

        tmp += "<span class='st_sharethis_large' displayText='ShareThis'></span>";
	tmp += "<span class='st_facebook_large' displayText='Facebook'></span>";
	tmp += "<span class='st_twitter_large' displayText='Tweet'></span>";
	tmp += "<span class='st_linkedin_large' displayText='LinkedIn'></span>";
	tmp += "<span class='st_pinterest_large' displayText='Pinterest'></span>";
	tmp += "<span class='st_email_large' displayText='Email'></span>";

        ocl = "$(\"#top_view\").popup(\"close\");";
        tmp = tmp + "<span  class='mybtns' style='vertical-align:top;'  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  class='' style='' >";
        tmp = tmp + "<img src='images/delete_black.png'  class='menu_btn'  >";
        tmp=tmp +"</button>";
        tmp=tmp +"</span>";
 
       lbl = "nets_spot";
       $('#'+lbl).html(tmp);
       stButtons.locateElements();

}

sharer.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}


sharer.prototype.hide = function() {

   var pobj=null;
   var lbl = "";
   var tmp = "";
   lbl = this.spotid;
   pobj = document.getElementById(lbl);
   if ( pobj != null) {
        pobj.innerHTML = tmp;
   }
   this.showing = false; 
 
}


sharer.prototype.draw_debug = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";

     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}


sharer.prototype.show_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;
    var ocl = "";

       ocl = "nicky.toggle();";
       tmp = tmp + "<button  data-role='button' data-inline='true' onclick='"+ocl+"'  style='background:white;' >";
       tmp = tmp + "<img src='images/share.png' class='menu_btn' >";
       tmp = tmp + "</button>";
       lbl = 'share_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
         $('#'+lbl).trigger("create");
       }
}

sharer.prototype.hide_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;

       lbl = 'share_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
       }
}



sharer.prototype.gplus_render = function() {

    var po = document.createElement('script');
    po.type='text/javascript';
    po.async= true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po,s);

}



sharer.prototype.fb_render = function() {

//    FB.XFBML.parse();

}

 
sharer.prototype.twitter_render = function() {   

$.getScript('http://platform.twitter.com/widgets.js');

/*
      !function(d,s,id){
      var js,fjs=d.getElementsByTagName(s)[0];
      if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;js.src="https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js,fjs);
       }
     }(document,"script","twitter-wjs"); 
*/
}


