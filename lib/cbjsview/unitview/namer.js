
poster.prototype.draw_name = function() {

   var tmp="";
   var pobj=null;
   var lbl = "";
   var urlts= null;
   var ocl = "";
   var tlink = "";
   var s = "";
   cls = "";

   if (this.uname == "")   {
 
   } else {
      if ((this.source == "twitter") && (daviewer.zoom == true)) {

          tlink =  "http://twitter.com/Support/status/" + this.pid;
 //        tlink =  "http://twitter.com/" + this.uname;
          tmp += "<a href='"+tlink+"' target='_blank' >"+this.uname+"</a>";

      } else {
          tmp = tmp + this.uname;
      }

    }
  
      lbl = this.rungster + '_name_spot';
      if ( document.getElementById(lbl) != null ) {
        document.getElementById(lbl).innerHTML= tmp;
     }
     
}
              

poster.prototype.get_name = function() {
    var tmp = "";
    var lbl = "";
    var ocl = "";

    var tval =  "";
        if (this.uname != "") {
          tval =  this.uname;
        } else {
          tval =  pname;
        }
 
    lbl = this.rungster + '_name_box';
    tmp += "<label for='"+lbl+"' > Name: </label>";
    tmp =tmp + "<input size=15 value='"+tval+"' id='"+lbl+"' onclick='' type=text' > ";

    lbl = this.rungster + '_name_spot';
    if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML=tmp; 
        var ta = this.rungster + '_name_box';
        if (jqm_off == false) {
          $('#'+ta).textinput();
        }
    } 
}



poster.prototype.update_name = function() {

     var lbl = "";
     var obj = null;
     lbl = this.rungster + '_name_box';

       var tmpstr="";
       obj = document.getElementById(lbl);

       if (obj != null) {
          this.uname = document.getElementById(lbl).value;
       }

}


poster.prototype.toggle_getname = function() {

    if (this.shape != "getname") {
       this.shape = "getname";
    } else {
       this.shape = "";
    }
    this.redraw_rung();
}



poster.prototype.space_me = function() {
     var tmpstr = "";
     var lbl = "";
     var ocl = "";

     tmpstr = tmpstr + "<span class='spotd_off'  onclick=''  >";
     tmpstr = tmpstr + "are you "+ this.pname +" ?   ";
     tmpstr = tmpstr + "</span>";
 
     ocl = this.varname + ".draw_name();";   
     tmpstr = tmpstr + "<span class='spotd_on' onclick='"+ocl+"' > y </span>";
     ocl = this.varname + ".amnesiate();";   
     tmpstr = tmpstr + "<span class='spotd_on' onclick='"+ocl+"' > n </span>";

     lbl = this.rungster + '_name_spot';
     if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmpstr; 
     } 
}


poster.prototype.amnesiate = function() {

      this.uname = "";
      this.name_tmp = "";
/*
     FB.logout(function(response) {
       //alert(" user is now logged out ");
      say_hi();
     });
*/   
      this.draw_name(); 
}



poster.prototype.dejavu = function() {

     var tmpstr = "";
     var lbl = "";

     tmpstr = tmpstr + "been here before ?<br> ";
     tmpstr = tmpstr + " <input  type='button' value='yes' onclick=''  >";
     tmpstr = tmpstr + " <input  type='button' value='no' onclick=''  >";

      lbl = this.rungster + '_name_spot';
     if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML= tmpstr;
     } 
}


