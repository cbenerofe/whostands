

poster.prototype.draw_person = function() {

    if (this.person_shape == "email") {
      this.show_email();
    } else if (this.person_shape == "facebook") {
      this.show_facebook();
    } else if (this.person_shape == "twitter") {
      this.show_twitter();
    } else if (this.person_shape == "google") {
      this.show_google();
    }
}


poster.prototype.show_email = function() {

    var tmpstr = "";
    var tmpname =  pname;
    tmpstr =tmpstr + "<span > email </span>";
    tmpstr =tmpstr + "<span >" + this.emailaddr + "</span>";
    tmpstr =tmpstr + "<span> <input type='button' value=' ' onclick='nicky.sharee.get_email();' /> </span>";

    var lbl = "";
      lbl = this.spotid +'_'+tspot;
      lbl = lbl + '_story_spot';

    if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML=tmpstr; 
    } 
}


poster.prototype.get_email = function() {

    var tmpstr = "";
    var tmpname =  pname;
    tmpstr =tmpstr + "<span > email </span>";
    tmpstr =tmpstr + "<span> <input size=25 value='' id='email_box' > </span>";
    tmpstr =tmpstr + "<span> <input type='button' value='set' onclick='nicky.sharee.update_email();' /> </span>";
    var lbl = "";
      lbl = this.spotid +'_'+tspot;
      lbl = lbl + '_story_spot';

    if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML=tmpstr; 
    } 

}


poster.prototype.update_email = function() {

    var tmp = "";
    var lbl = "";
    var obj = null;
    obj =  document.getElementById('email_box');
    if (obj != null) {
      this.email = obj.value;
    } 
    this.show();
}



poster.prototype.show_facebook = function() {
    var tmpstr = "";
    var tmpname =  pname;
    tmpstr =tmpstr + "<span > facebook </span>";
    tmpstr =tmpstr + "<span>" + this.facebookid + "</span>";
    tmpstr =tmpstr + "<span> <input type='button' value=' ' onclick='' /> </span>";
    var lbl = "";
      lbl = this.spotid +'_'+tspot;
      lbl = lbl + '_story_spot';

    if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML=tmpstr; 
    } 
}

poster.prototype.show_twitter = function() {

    var tmpstr = "";
    var tmpname =  pname;
    tmpstr =tmpstr + "<span > twitter </span>";
    tmpstr =tmpstr + "<span>" + this.twitterid + "</span>";
    tmpstr =tmpstr + "<span> <input type='button' value=' ' onclick='' /> </span>";
    var lbl = "";
      lbl = this.spotid +'_'+tspot;
      lbl = lbl + '_story_spot';

    if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML=tmpstr; 
    } 
}

poster.prototype.show_google = function() {

    var tmpstr = "";
    var tmpname =  pname;
    tmpstr =tmpstr + "<table cellspacing=0 cellspacing=0 border=0 width=100% >";
    tmpstr =tmpstr + "<tr>";
    tmpstr =tmpstr + "<td class=spot_off  onclick='' > google </td>";
    tmpstr =tmpstr + "<td class=spot_off  onclick='' >" + this.googleid + "</td>";
    tmpstr =tmpstr + "<td> <input type='button' value=' ' onclick='' /> </td>";
    tmpstr =tmpstr + "</tr>";
    tmpstr =tmpstr + "</table>";
     var lbl = "";
      lbl = this.spotid +'_'+tspot;
      lbl = lbl + '_story_spot';

    if (document.getElementById(lbl)!=null) {
        document.getElementById(lbl).innerHTML=tmpstr; 
    } 
 }




poster.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.draw_person();
   }
}


poster.prototype.hide = function() {
     var tmp = "";
     var lbl = "";
     var ocl="";
     var omo = "";

     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }
     this.showing = false;

}


