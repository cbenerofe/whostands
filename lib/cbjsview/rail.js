
function rail (pspotid) {
   this.spotid = pspotid + "_spot";
   this.varname = "dale";
   this.showing = false;
}
   
rail.prototype.show = function() {
   this.draw_rail();
}

rail.prototype.draw_rail = function() {
   var pobj=null;
   var lbl = "";
   var tmp = "";
   var tsrc = "";
    
      tmp = tmp + "<form id='' class='rail' style='' >";
      tmp = tmp + "<label for='slider-1' class=''   ></label>";
      tmp = tmp + "<input type='range'   name='slider-1' id='slider-1' value='1' min='1' max='100'  style='' data-mini='true'  data-theme='c' data-track-theme='e' class='ui-hidden-accessible'  />";
      tmp = tmp + "</form>";

   lbl = 'rail_spot';
   pobj = document.getElementById(lbl);
   if ( pobj != null) {
      pobj.innerHTML = tmp;
       if (jqm_off == true) {
         $('#slider-1').on("change",function(event) {
               var st = "";
                st = parseInt(event.target.value);
                daviewer.goto_listdex(st);
          });
       } else {

           $('#'+lbl).trigger("create");
            $('#slider-1').bind("slidestop",function(event) {
                var st = "";
                st = parseInt(event.target.value);
                daviewer.goto_listdex(st);
            });

           $('#'+lbl).trigger("create");
       }

       this.showing = true;
    }
}

rail.prototype.draw_raildata = function() {
   var lbl = "";
   var tmp = "";
   var moin = "";
   var mout = "";

   if (daviewer.stats != null) {
      var lchunk = Math.floor(daviewer.listdex/daviewer.top_end);
      var lchunks = Math.floor(daviewer.stats.lnum / daviewer.top_end);
      var mchunks = Math.floor(daviewer.stats.cnum / daviewer.top_end);

      if (mchunks > lchunks ) {
      } 
 
      var st = lchunk * daviewer.top_end;
      var fn = lchunk * daviewer.top_end + daviewer.top_end;
      if (fn > daviewer.dalist.length) {
        fn = daviewer.dalist.length;
      }
      var ld = parseInt(daviewer.listdex) + 1;
      var cn = daviewer.stats.cnum;
      var ln = daviewer.stats.lnum + 1;
      var lc = lchunk + 1;
      var lcs = lchunks;

      $('#slider-1').attr("min", 0 );
      $('#slider-1').attr("max", ln );
      $('#slider-1').val(ld);

     if (jqm_off == false) {
      $('#slider-1').slider('refresh');
     }

     tmp =   ln;
     $('#slider-1-detail').html(tmp);

/*
     if (daviewer.zoom == true) {
       tmp =  "#" +  ld;
     } else {
       tmp =   st + " to " + fn;
     }
     $('#lcount_spot').html(tmp);

     tmp = "";
     tmp = " of " + ln;
     if (ln < cn ) { 
       tmp = tmp + "<a href='#' onclick='daviewer.more();' data-inline='true' data-role='button' data-mini='true' >more</a>";
     }
     $('#mcount_spot').html(tmp);
     $('#mcount_spot').trigger("create");

      if (lchunks >=1) {
         $('#chunkslide_box').show();
         $('#slider-2').attr("min", 0 );
         $('#slider-2').attr("max", lchunks );
         $('#slider-2').val(lchunk);

       if (jqm_off == false) {
         $('#slider-2').slider('refresh');
       }
         if (st == 0) { st = 1; }
         tmp = lchunks + " x" + daviewer.top_end;
         $('#slider-2-detail').html(tmp);
      } else {
         $('#slider-2-detail').html("");
         $('#chunkslide_box').hide();
      }
*/

   } else {
//	   alert("no stats");
   }

       if (debug == true) {
	       this.draw_debug();
       }
}


rail.prototype.draw_debug = function() {
     var pobj=null;
     var lbl = "";
     var tmp = "";

  if (daviewer.stats != null) {

       tmp = tmp + "<div class='spotd_off' >";
       tmp = tmp + "ltype=" + daviewer.stats.listype;
       tmp = tmp + "</div>";

     if ((daviewer.stats.cat != undefined )  && (daviewer.stats.cat != "" )) {
       tmp = tmp + "<div class='spotd_off' >";
       tmp = tmp + "cat=" + daviewer.stats.cat + " sub=" + daviewer.stats.subcat;
       tmp = tmp + "</div>";
     }

     if ((daviewer.stats.sterms != undefined )  && (daviewer.stats.sterms != "" )) {
       tmp = tmp + "<div class='spotd_off' >";
       tmp = tmp + "sterms=" + daviewer.stats.sterms;
       tmp = tmp + "</div>";
     }


    if (daviewer.stats.month != undefined) {
       tmp = tmp + "<div class='spotd_off' >";
       tmp = tmp + daviewer.stats.month + " '" + daviewer.stats.year;
       tmp = tmp + "</div>";
     }

      var lchunk = 1
      var lchunks = 1;
       if (daviewer.stats != null) {
          lchunk = Math.floor(daviewer.listdex/daviewer.top_end);
          lchunks = daviewer.stats.lnum / daviewer.top_end;
       }
      var st = lchunk * daviewer.top_end;
      if (st == 0) {st = 1; } 
      var fn = st + daviewer.top_end  -1;
      if (fn >= daviewer.stats.lnum) {
          fn = daviewer.stats.lnum -1;
      }
      var ld = daviewer.listdex + 1;

       tmp = tmp + "<div  class='spotd_off' >";
       tmp = tmp + "lnum=" + daviewer.stats.lnum;
       tmp = tmp + " cnum=" + daviewer.stats.cnum;
       tmp = tmp + " lchunk=" + daviewer.stats.last_chunk;
       tmp = tmp + " fin=" + fn;
       tmp = tmp + "</div>";

  } else {
	  tmp = tmp + "no stats object";
  }

     lbl = "rail_debug";
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
     }
}


rail.prototype.toggle = function () {
 
   if (this.showing == true ) {
       this.hide();
   } else {
       this.show();
   }
}


rail.prototype.hide = function() {

   var pobj=null;
   var lbl = "";
   var tmp = "";

     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
         pobj.innerHTML = tmp;
         this.showing = false;
     }

}



