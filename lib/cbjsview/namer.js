  

function namer (pspotid) {

   this.spotid = pspotid + "_spot";
   this.showing = false;
   this.varname = "jesie";
   this.tmp_name = "";
   this.shape = "";  //twitter,facebook,google
}


namer.prototype.show = function() {
      var tmp = ""; 
      var ocl ="";
      var lbl = "";

    if (pname == "") {
 
         var tval =  "";
        if (pname != "") {
          tval =  pname;
        } else {
          tval =  "name...";
        }
       tmp = tmp + "<span style='width:150px;display:inline-block;vertical-align:middle;'  >";
       tmp =tmp + "<input size=10 value='"+tval+"' data-inline='true'  id='pname_box'  /> ";
      tmp=tmp +"</span>";

       lbl = this.spotid + "check_btn";
       ocl = this.varname + ".find_me();";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'   >";
        tmp = tmp + "<img src='deskfm/images/icons/right_arrow_circle.png' class='menu_btn' >";
      tmp=tmp +"</button>";

    } else {

       lbl = "spacename_btn";
       ocl = "jesie.space_me();";
       tmp = tmp + "<span  id='"+lbl+"' class='"+cls+"' onclick='"+ocl+"'  onmouseover='"+moin+"' onmouseout='"+mout+"'  >";
       tmp = tmp +  pname;
       tmp = tmp + "</span>";

       lbl = this.spotid + "twitter_btn";
       ocl = this.varname + ".set_shape(\"twitter\");";
       tmp=tmp +"<span onclick='"+ocl+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/twitter.png' width='20px' >";
       tmp=tmp +"</span>";

       lbl = this.spotid +  "_facebook_btn";
       ocl = this.varname + ".set_shape(\"facebook\");";
       tmp=tmp +"<span onclick='"+ocl+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/facebook.png' width='20px' >";
       tmp=tmp +"</span>";

       lbl = this.spotid +  "_google_btn";
       ocl = this.varname + ".set_shape(\"google\");";
       tmp=tmp +"<span onclick='"+ocl+"' >";
       tmp = tmp + "<img src='deskfm/images/icons/googleplus.png' width='20px' >";
       tmp=tmp +"</span>";
    }

   //    tmp=tmp +"</div>";
 
     lbl = this.spotid;
    if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML=tmp; 
        $('#'+lbl).trigger("create");
        this.showing = true; 
    }

}


namer.prototype.space_me = function() {
     var tmpstr = "";
     var lbl = "";
        tmpstr = tmpstr + "<span class='spotd_off'  onclick='jesie.show();'  >";
        tmpstr = tmpstr + "are you "+ pname +" ?   ";
        tmpstr = tmpstr + "</span>";
        tmpstr = tmpstr + "<span class='spotd_on' onclick='jesie.show();' > y </span>";
        tmpstr = tmpstr + "<span class='spotd_on' onclick='jesie.amnesiate();' > n </span>";
     lbl = "name_talk";
     if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmpstr; 
     } 
}


namer.prototype.amnesiate = function() {
      pname="";
      this.tmp_name="";
      pname_box = null;
/*
     FB.logout(function(response) {
       //alert(" user is now logged out ");
      jesie.show();
     });
*/   
      this.get_name(); 
}


namer.prototype.find_me = function() {

    var cooknum = 0;
    var tmp_name = "";
    if (document.getElementById('pname_box') != null) {
      this.tmp_name = document.getElementById('pname_box').value;
    }

   if (tmp_name != "")  {
        pname = tmp_name;
    }
    this.show();

}

namer.prototype.dejavu = function() {

     var tmpstr = "";
     var lbl = "";
     tmpstr = tmpstr + "been here before ?<br> ";
     tmpstr = tmpstr + " <input  type='button' value='yes' onclick='jesie.whichone();'  >";
     tmpstr = tmpstr + " <input  type='button' value='no' onclick='jesie.addName();'  >";

     lbl = "name_talk";
     if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML= tmpstr;
     } 
}


namer.prototype.set_shape = function(pstr) {
       if (pstr != undefined) {
          this.shape=pstr;
        }
       this.show();
}


namer.prototype.toggle = function() {
    if (this.showing == true) {
      this.find_me();
      this.hide();
    } else {
      this.show();
    }
}

 
namer.prototype.hide = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;

    if (document.getElementById(this.spotid)!=null) {
        document.getElementById(this.spotid).innerHTML=tmp; 
	this.showing = false;
    }
}

  
namer.prototype.show_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;
    var ocl = "";

       ocl = 'diego.toggle_topshape(\"name\");'
       tmp = tmp + "<button  data-role='button' data-inline='true' onclick='"+ocl+"'  style='background:white;' >";
       tmp = tmp + "<img src='deskfm/images/icons/people_clay.png' class='menu_btn' >";
       tmp = tmp + "</button>";
       lbl = 'name_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
         $('#'+lbl).trigger("create");
       }
}

namer.prototype.hide_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;

       lbl = 'name_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
       }
}



