
function searcher (pspotid) { 

   this.spotid = pspotid + "_spot";
   this.varname = "wanda";
   this.showing = false;
   this.shape = "full";  //full,shrunk
   this.sterms = "";
   this.full_check = false;
}

searcher.prototype.show = function() {
  
   var tmp = "";
   var cls="";
   var pobj = null;
   var lbl = "";
   var ocl="";
   var ims = "";
   var sz = '10';

/*
        lbl = 'tags_btn';
        ocl = ''
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='padding:0px;' >";
        tmp = tmp + "tags";
        tmp = tmp + "</button>";
 */
     tmp += "<div id='' style='display:inline-block;padding:0px;vertical-align:middle;' >";
//     lbl = this.spotid + "_dasbox";
      lbl = "searchbox";
    ocl = this.varname+ ".check_central();";
    tmp = tmp + "<input id='"+lbl+"' data-mini='true' data-clear-btn='true' onkeyup='"+ocl+"' value='"+this.sterms+"' type='search'  />";
     tmp += "</div >";
 
   lbl = this.spotid;
   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;
      this.showing = true;
      $('#'+lbl).trigger("create");
    //  lbl = this.spotid + "_dasbox";
   //   $('#'+lbl).textinput("refresh");
      $('.ui-input-clear').on('click', function(e){
         wanda.clear();
      });
   }
}


searcher.prototype.clear = function() {

   var tmp = "";
   var pobj = null;

   this.sterms = "";
   daviewer.sterms = "";
   daviewer.load_webitlist();
}


searcher.prototype.check_local = function() {

   var tmpstr = "";
   var pobj = null;
   var lbl = this.spotid + "_dasbox";
   var st = "";

   if (document.getElementById(lbl) != null) {
       st =  document.getElementById(lbl).value; 
   }

   this.sterms = st;
   daviewer.load_search_list(st);
}


searcher.prototype.check_central = function() {

   var tmpstr = "";
   var pobj = null;
   var lbl = "searchbox";
   var st = "";
   var s= "";

   if (document.getElementById(lbl) != null) {
       st =  document.getElementById(lbl).value; 
   }
   if (st != "") { 
       this.sterms = st;
       daviewer.sterms = st;
       amare.get_csearch_list(st);
   }
}


searcher.prototype.hide = function() {
   var tmpstr = "";
   var pobj = null;
   var lbl = "";
   var cls="";

   lbl = this.spotid;

   pobj = document.getElementById(lbl);
   if (pobj != null) {
       pobj.innerHTML=tmpstr; 
       this.showing = false;
   }
//   this.clear();
}



searcher.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}


searcher.prototype.draw_debug = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";
     tmp = tmp + "searcher";
     tmp = tmp + " sh="+ this.shape;
     tmp = tmp + " st="+ this.sterms;
     lbl = this.spotid + '_debug';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}


