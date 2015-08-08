

poster.prototype.draw_story = function() {

   var tmp="";
   var pobj=null;
   var lbl = "";
   var ocl = "";
   var cls = "";
   var urlts= null;

       var tiesto = this.story;

    if ((this.story != "") && (this.story != null)) {

       //tiesto = this.story.replace(/<br>/gi,"\n");

          var exp2 = new RegExp(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);

          urlts=[];
          while ((urlts=exp2.exec(tiesto)) != null) {
             var s = urlts[0];
             if (this.linkurl == "") {
               this.linkurl = urlts[0];
               this.changed = true;
               this.link_changed = true;
            }
          } 

          var  exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
          var pg =   tiesto;
	  pg =  tiesto.replace(exp,"");
          if (pg != this.story) {
             this.story = pg;
             this.story_changed = true;
             this.changed = true;
          }
          var ps = pg;
          tmp = tmp + ps;
     } else {

        if (this.listype == "newbie") {
          tmp += "new one";
        }

     }

      lbl = this.rungster + '_story_spot';
      if ( document.getElementById(lbl) != null ) {
         document.getElementById(lbl).innerHTML= tmp;
      }
}


poster.prototype.get_story = function() {
   var tmp="";
   var pobj=null;
   var lbl = "";
   var ocl = "";
   var oku = "";
   var urlts= null;
   var tiesto = "";

   tmp = "";
   if (this.story != null) {
	tiesto = this.story;
        tiesto = this.story.replace(/<br>/gi,"\n");
   } 

	lbl = this.rungster + "_story_area";
        oku = this.varname + ".update_story();";
        tmp += "<label for='"+lbl+"' > Story: </label>";
        tmp = tmp + "<textarea id='"+lbl+"' data-mini='true' class='' onkeyup='"+oku+"' style='height:125px;width:225px;' data-inline='true'  >";
        tmp = tmp + tiesto;
        tmp = tmp + "</textarea>";


      lbl = this.rungster + '_story_spot';
      if ( document.getElementById(lbl) != null ) {
         document.getElementById(lbl).innerHTML= tmp;
         var ta = this.rungster + "_story_area";
         if (jqm_off == false) {
           $('#'+ta).textinput();
         }
      }
   
}


poster.prototype.update_story = function() {

     var lbl = "";
     var obj = null;
     var tmpstr = "";
     
     lbl = this.rungster + '_story_area';

      obj = document.getElementById(lbl);

       if (obj != null) {
          var bill = document.getElementById(lbl).value;
          this.story = bill.replace(/["']{1}/gi,"");
          this.story = bill.replace(/[\n]{1}/gi,"<br>");
          this.changed = true;
	  this.story_changed = true;
          if (this.listype == "newbie") {
             amare.newbielist[this.dadex].story = this.story;
          }
          daviewer.change_btns(); 
          obj.focus();
      }

}


poster.prototype.toggle_getstory = function() {

    if (this.shape != "getstory") {
       this.shape = "getstory";
    } else {
       this.shape = "";
    }
    this.redraw_rung();
}


 poster.prototype.reset_story = function() {

     var tspot = this.rung;
     var lbl = "";
     lbl = this.spotid;
     if (tspot != undefined) {
       lbl = lbl +'_'+tspot;
     }
     lbl = lbl + '_story_area';

        var sdex = this.parvar + ".darungs["+tspot+"].dadex";
        var dex = eval(sdex);
        sdex = this.parvar + ".dalist["+dex+"]";
        dex = eval(sdex);
 
        var sreq = "dalist["+dex+"].story";
        this.story = eval(sreq);
     
        this.draw_story();
        this.change_btns(); 

}



