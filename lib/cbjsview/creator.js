function creator (pspotid) {

   this.spotid = pspotid + "_spot";
   this.varname = "adoni";
   this.showing = false;
   this.shape = "";  

}


creator.prototype.show = function() {
    var lbl = "";
    var tmp = "";
    var ocl = "";

    tmp += "<div  id='' class='' style=''  >";

    ocl = this.varname + ".new_one();";
    tmp += "<button data-inline='true' onclick='"+ocl+"' >";
    tmp += "new one";
    tmp += "</button>";

    tmp += "</div>";

    lbl = "create_spot";
    $('#'+lbl).html(tmp);
    if (jqm_off == false) {
      $('#'+lbl).trigger("create");
    }
    daviewer.load_newbie_list();
 
}

creator.prototype.new_one = function() {

   var t = null;
   var o = new webit();
   o.listype = "newbie";
   amare.newbielist.unshift(o);
   amare.total_newbies.lnum ++; 

   daviewer.zoom = true;
   daviewer.editing = true;
   daviewer.load_newbie_list();

}


 
creator.prototype.show_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;
    var ocl = "";

       tmp = tmp + "<button  data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
       tmp = tmp + "<img src='images/share.png' class='menu_btn' >";
       tmp = tmp + "</button>";
       lbl = 'create_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
         $('#'+lbl).trigger("create");
       }
}

sorter.prototype.hide_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;

       lbl = 'create_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
       }
}



creator.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}


creator.prototype.hide = function() {

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

