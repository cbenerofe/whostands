

poster.prototype.draw_embed = function() {

  var tmp = "";
  var elink = "";
  var ocl="";
  var ps = "";
  var pobj=null;
  var lbl = "";

       if ((this.embedurl == "") || (this.embedurl == undefined)) {

       } else { 
              elink = this.embedurl;
		  ocl = this.varname + ".toggle_showembed();";
        	  tmp = tmp + "<button  onclick='"+ocl+"' >";  
		  tmp =	tmp + "<img src='deskfm/images/icons/embed.jpg' width='25px' >";
		  tmp = tmp + "</button>";
	          lbl = this.rungster + '_embed_btn';
	       	  pobj = document.getElementById(lbl);
	          if ( pobj != null) {
	            pobj.innerHTML = tmp;
        	  }
       }

       tmp = "";
       if ((this.embed_show == true ) && (elink != "")) {
           tmp = tmp + " <div style='width:250px;margin:0 auto;' > ";
           tmp = tmp + "<iframe src='"+elink +"' style='width:250px;' ";
           tmp = tmp + " scrolling='no'  width='250' height='200' > ";
           tmp = tmp + " </iframe> ";
           tmp = tmp + " </div> ";
       }

       lbl = this.rungster + '_embed_spot';
       pobj = document.getElementById(lbl);
       if ( pobj != null) {
         pobj.innerHTML = tmp;
       }
   
}


poster.prototype.get_embed = function() {

     var tmp="";
     var tlink = "";
     var ocl="";
     var ps = "";
     var pobj=null;
     var lbl = "";
  
       if ((this.embedurl != undefined) && (this.embedurl != "")) {      

          tmp = tmp + "<a href='"+this.embedurl+"' target='_blank' > "; 
           tmp = tmp + "<img src='deskfm/images/icons/embed.jpg' width='25px' >";
//           tmp = tmp + this.embedurl; 
          tmp = tmp + " </a> ";

          lbl = this.rungster + '_embed_btn';
          pobj = document.getElementById(lbl);
          if ( pobj != null) {
             pobj.innerHTML = tmp;
          } 
 
         tlink = this.embedurl;

       } else {

         tlink = "";
       }

         tmp = ""; 
	 lbl = this.rungster + "_embed_addr"; 
         ocl = this.varname + ".update_embed();";
         tmp += "<label for='"+lbl+"' > Embeded Media: </label>";
         tmp = tmp + "<input id='"+lbl+"' data-clear-btn='true' name='"+lbl+"' type='text' value='"+tlink+"' style='' onkeyup='"+ocl+"' />";    

         if (this.embed_show == true ) {
           tmp = tmp + " <div style='width:250px;margin:0 auto;' > ";
           tmp = tmp + " <iframe src='"+tlink+"' style='width:250px;margin:0 auto;' ";
           tmp = tmp + " scrolling='no'  width='250' height='200' > ";
           tmp = tmp + " </iframe> ";
           tmp = tmp + " </div> ";
         }

       lbl = this.rungster + '_embed_spot';
       pobj = document.getElementById(lbl);
       if ( pobj != null) {
         pobj.innerHTML = tmp;
 	 var ta = this.rungster + "_embed_addr"; 
         if (jqm_off == false) {
           $('#'+ta).textinput();
         }
       }
 
}


poster.prototype.update_embed = function() {

     var tmp="";
     var pobj=null;
     var lbl = "";
     lbl = this.rungster + '_embed_addr';
     pobj = document.getElementById(lbl);
     if (pobj != null ) {
        var tv = pobj.value;
        if ((tv != null) && (tv != undefined)) {
          this.embedurl = tv;
          this.changed = true;
	  this.embed_changed = true;
          if (this.listype == "newbie") {
              amare.newbielist[this.dadex].embedurl = this.embedurl;
          }
          daviewer.change_btns();
        }
        pobj.focus();
     }
}


poster.prototype.toggle_getembed = function() {

    if (this.shape != "getembed") {
       this.shape = "getembed";
    } else {
       this.shape = "";
    }
    this.redraw_rung();
}



poster.prototype.toggle_showembed = function  () {

     if (this.embed_show == true) {
        this.embed_show = false;
     } else {
         this.embed_show = true;
     }

     this.draw_embed();

}







