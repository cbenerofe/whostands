
function viewer (pscreen,pvarname) {

   this.screen = pscreen;
   this.varname = pvarname;

   this.sterms = "";
   this.groupid = "";
   this.stats = null;

   this.listdex = 0;
   this.dalist=[];
   this.darungs= [];

   this.top_end=10;
   this.gridcols=0;

   this.zoom = false;

   this.metro_spd=0;
   this.metro_dir="fwd";
 
}


viewer.prototype.draw_view = function() {
    var tmpstr = "";
    var lbl = "";
    var ocl = "";
    var cls='';
    var ct = 0; 
    var st = this.top_end;
    var vdex = "";
    var ltype = "";
    var mdex = "";
   
     if (this.zoom == true) {
         st = 1;
      } 

     this.gridcols = this.calc_gridcols();

   if (jqm_off == false) {
     if (this.zoom == true) { 
       tmpstr=tmpstr+"<div style='max-width:400px;margin:0 auto;'  >";
     } else if (this.gridcols ==1)  { 
       tmpstr=tmpstr+"<ul id='lv' data-role='listview' data-inset='false' data-split-theme='d' style=''  >";
     } else if (this.gridcols == 2) {
        tmpstr=tmpstr+"<ul  id='lv'  data-role='listview'  class='ui-grid-a' data-inset='false'  data-split-theme='d' style='' data-corners='' >";
     } else if (this.gridcols == 3) {
        tmpstr=tmpstr+"<ul  id='lv'  data-role='listview'  class='ui-grid-b'  data-inset='false'  data-split-theme='d'  style=''  >";
     } else if (this.gridcols == 4) {
        tmpstr=tmpstr+"<ul  id='lv' data-role='listview' class='ui-grid-c'  data-inset='false'  data-split-theme='d'  style=''  >";
     }
     cls = '';
   }

      while (ct < st) {
        if (this.darungs[ct] != undefined) {

         lbl = this.screen+"_rung_"+ct;
         if ((jqm_off == true)  || (this.is_mini == true) || (daviewer.zoom == true)) {
              tmpstr=tmpstr+"<div id='"+lbl+"' class='' style=''  >"; 
              tmpstr=tmpstr+"</div>";
         } else {

            if (this.gridcols == 1) {
              cls = '';
            } else {
              cls  = this.next_gridblock(cls);
            }
              tmpstr=tmpstr+"<li id='"+lbl+"' class='"+cls+"' style='min-height:100px;vertical-align:top;padding:10px;white-space:normal;' data-icon='false'  >"; 
              tmpstr=tmpstr+"</li>";
         }
        }
       ct = ct + 1;
      }

    if ((this.stats != null) && (this.zoom == false))  {
        if ((jqm_off == true)  || (this.is_mini == true) || (daviewer.zoom == true)) {
           tmpstr += "<div>";
        } else {
            if (this.gridcols == 1) {
              cls = '';
            } else {
              cls  = this.next_gridblock(cls);
            }
           tmpstr += "<li class='"+cls+"'  style='min-height:100px;vertical-align:top;padding:10px;white-space:normal;'  >";
        }

        var to = this.listdex + this.top_end;
        var nomore = false;
        ocl = "";
        if (to < this.stats.lnum) {
          ocl = "daviewer.goto_listdex("+to+");"
        } else {
          if (this.stats.lnum < this.stats.cnum) {
              ocl = "daviewer.more();";
          }
          else { nomore = true; }
        }
        
       if (nomore == false) {
         tmpstr += "<a href='#' onclick='"+ocl+"' data-inline='true' data-role='button' data-mini='true' >";
         tmpstr += "more </a>";
       }
        if ((jqm_off == true)  || (daviewer.zoom == true)) {
           tmpstr += "</div>";
        } else {
           tmpstr += "</li>";
        }
    }
 
    if ((jqm_off == true)  || (daviewer.zoom==true)) {
      tmpstr=tmpstr+"</div>";
    } else {
      tmpstr=tmpstr+"</ul>";
    }
 
    lbl = this.screen;
 
    if (document.getElementById(lbl)!= null) {
        document.getElementById(lbl).innerHTML=tmpstr;
        ct = 0;
         while (ct < st) {
           if (this.darungs[ct] != undefined) {
             vdex = this.darungs[ct].vdex;

             if (this.dalist[vdex] != null) {
               mdex = this.dalist[vdex].mdex;
	       ltype = this.dalist[vdex].ltype;

               if (this.darungs[ct].postman == undefined ) {
                 s = this.varname + ".darungs["+ct+"].postman";
                 this.darungs[ct].postman = new poster(this.screen,ct,this.varname,s,this.is_mini);
               }
               if (this.darungs[ct].postman != undefined) {
	         this.darungs[ct].postman.set_ppid(mdex,ltype);
                 this.darungs[ct].postman.build_rung(ct);
                 this.darungs[ct].postman.draw_rung(ct);
               }
	     }
           }
           ct = ct + 1;
	 }

       if (jqm_off == false) {
          $('#lv').listview();
          $('#lv').listview("refresh");
       }
   }

    dale.draw_raildata();
    sal.draw_vman();

    if (debug == true) {
       this.draw_debug();
    }

}

viewer.prototype.calc_gridcols = function () {

    var gridcols = 1;

          if ($(window).width() < 600) {
              gridcols=1;

          } else {

           if ($(window).width() > 1000) {

              if (buddah == true) {
                if (diego.bot_shape == "") {
                    gridcols=4;
                } else {
                    gridcols=3;
                }
              } else {
                  gridcols=3;
              }

            } else {
               if ($(window).width() > 800) {
                  if (buddah == true) {
                    if (diego.bot_shape == "") {
                        gridcols=3;
                    } else {
                        gridcols=2;
                    }
                  } else {
                       gridcols=3;
                  }

              } else {
                       gridcols=2;
             }
           }
        }

   return  gridcols;

}


viewer.prototype.recalc_gridcols = function () {

    var gnum = this.calc_gridcols();
    if (gnum != this.gridcols) {
	this.draw_view();
    }
} 

viewer.prototype.next_gridblock = function (pstr) {
   var ret = "ui-block-a";

   if (this.gridcols == 2) {
     if (pstr == "ui-block-a") {
        ret = "ui-block-b";
     }

   } else if (this.gridcols == 3) {
     if (pstr == "ui-block-a") {
        ret = "ui-block-b";
     } else if (pstr == "ui-block-b") {
        ret = "ui-block-c";
     }
   } else if (this.gridcols == 4) {
     if (pstr == "ui-block-a") {
        ret = "ui-block-b";
     } else if (pstr == "ui-block-b") {
        ret = "ui-block-c";
     } else if (pstr == "ui-block-c") {
        ret = "ui-block-d";
     }
   }

   return ret;
}

viewer.prototype.toggle_zoom = function () {
   if (this.zoom == true ) {
       this.unset_zoom();
   } else {
       this.set_zoom();
   }
}


viewer.prototype.unset_zoom = function() {
   this.zoom = false;
   this.draw_view();
}


viewer.prototype.set_zoom = function() {
   this.zoom = true;

   this.draw_view();
}



viewer.prototype.hide_screen = function() {

    var tmpstr = "";
    var lbl = this.screen;
    if (document.getElementById(lbl)!= null) {
        document.getElementById(lbl).innerHTML=tmpstr;
    }
}



viewer.prototype.draw_debug = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";
 
     tmp += "<p>";
  if (this.stats != null) {
       tmp = tmp + " listype:="+ this.stats.listype;
       tmp += " lnum= " + this.stats.lnum;
       tmp += " cnum= " + this.stats.cnum;
       tmp += " last_chunk= " + this.stats.last_chunk;
       tmp += " max_chunks= " + this.stats.max_chunks;
       tmp += " month= " + this.stats.month;
       tmp += " year= " + this.stats.year;
  }

     tmp = tmp + " listlen="+ this.dalist.length;
     tmp = tmp + " rungs="+ this.darungs.length;
     tmp = tmp + " topend="+ this.top_end;
     tmp = tmp + " sterms="+ this.sterms;
    tmp += " ldex= " + this.listdex;
     tmp += "</p>";
 
     lbl = "foot_spot";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}




