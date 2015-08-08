

poster.prototype.draw_groups = function() {
    var tmp="";
    var tspot = this.rung;
    var lbl = "";
    var pobj=null;

    if (this.groupid != "") {
 
    lbl = this.spotid + '_' + this.rung + '_group_btn';

      moin = "marky(\""+lbl+"\");";
      mout = "unmarky(\""+lbl+"\");";
 
      tmp = tmp +"<span id='"+lbl+"' class='spotd_off' onclick='"+this.varname+".get_groups();' onmouseover='"+moin+"' onmouseout='"+mout+"' >";
      tmp = tmp + this.groupid;
      tmp=tmp + "</span>"; 

    }
 
    lbl = this.rungster + '_sort_spot';
    pobj = document.getElementById(lbl);
    if ( pobj != null) {
        pobj.innerHTML = tmp;
    }
}


poster.prototype.get_groups = function() {
    var tmp="";
    var pobj=null;
    lbl = this.rungster + '_sort_spot';
    pobj = document.getElementById(lbl);
    if ( pobj != null) {
        pobj.innerHTML = tmp;
    }
}


poster.prototype.update_groups = function() {

}


poster.prototype.set_group = function(pgroupid) {
      if (pgroupid != undefined) {
           this.groupid = pgroupid;
           this.changed = true;
	   this.group_changed = false;
           this.draw_groups();
           daviewer.change_btns();
      } 
}


poster.prototype.toggle_getgroup = function() {

    if (this.shape != "getgroup") {
       this.shape = "getgroup";
    } else {
       this.shape = "";
    }
    this.redraw_rung();
}



poster.prototype.hide_groups = function() {
     var tmpstr="";
     var pobj=null;
     var lbl = "";
     lbl = this.spotid;
     lbl = lbl +'_'+this.rung;
     lbl = lbl + '_sort_spot';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmpstr;
     }
}


