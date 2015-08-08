
function header (pshapes) {

    this.varname = "diego";

}	

header.prototype.show = function () {

     var tmp = "";
     var lbl = "";
     var ocl = "";

         tmp = tmp + "<span  id='tleft_spot' class='' style=''  >";
         tmp = tmp + "</span>";
 
         tmp = tmp + "<span id='tright_spot' class='' style='float:right;' >";
         tmp = tmp + "</span>";

         tmp = tmp + "<div style='clear:right;' ></div>";

         tmp = tmp + "<div>";
  
         tmp = tmp + "<span  id='bleft_spot' class='' style='display:inline-block;vertical-align:middle;'  >";
         tmp = tmp + "</span>";
 
         tmp = tmp + "<span id='bright_spot' class='' style='display:inline-block;float:right' >";
         tmp = tmp + "</span>";

         tmp = tmp + "<span style='clear:right;' ></span>";
         tmp = tmp + "</div>";

       var pobj = document.getElementById('menu_spot');
       if (pobj != null) {
            pobj.innerHTML = tmp;

            this.draw_left();
            this.draw_right();  
	    wanda.show();
	    dale.show();
	    nicky.show();

            $('#menu_spot').trigger("create");

            sal.show();

            if (debug == true) {
               this.draw_debug();
            } 
      }
}


header.prototype.draw_left = function () {
        var lbl = "";
        var ocl = "";
        var tmp = "";

     tmp = tmp + "<div  id='logo_spot' class='' style='display:inline;'  >";
        tmp = tmp + "</div>";

    lbl = 'tleft_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");

     tmp = "";

        ocl = 'daviewer.prev();'
	tmp += "<a href='#' onclick='"+ocl+"' data-role='button' data-inline='true'  data-icon='arrow-l' data-iconpos='notext'>prev</a>";
            tmp = tmp + "<span id='rail_spot' class='' style=''  >";
            tmp = tmp + "</span>";
 
     ocl = 'daviewer.next();'
     tmp += "<a href='#' onclick='"+ocl+"' data-role='button' data-inline='true' data-icon='arrow-r' data-iconpos='notext'>next</a>";

    lbl = 'bleft_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");

}


header.prototype.draw_right = function () {

     var lbl = "";
     var tmp = "";
     var ocl = "";

        tmp = tmp + "<div id='share_spot' class='' style='display:inline-block;vertical-align:middle;padding-top:5px;padding-right:5px;'  >";
        tmp = tmp + "</div>";

/*
        lbl = 'share_btn';
      //  ocl = "nicky.toggle();";
        tmp = tmp + "<span  id='"+lbl+"'  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='images/share.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";
*/

    lbl = 'tright_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");

    tmp = "";

/*
        lbl = 'nitro_btn';
        ocl = 'daviewer.toggle_nitro();'
        tmp = tmp + "<span  id=''  class='mybtns' style=''  >";
        tmp = tmp + "<button data-role='button' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img id='nitro_btn' src='images/dot_swirl.png'  class='menu_btn'  >";
        tmp = tmp + "</button>";
        tmp = tmp + "</span>";
*/

        tmp = tmp + "<span id='search_spot' class='' style='float:right;display:inline-block;padding-right:5px;'  >";
        tmp = tmp + "</span>";
 
        tmp = tmp + "<span class='clear:both;' ></span>";
 
    lbl = 'bright_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");

}


header.prototype.draw_debug = function () {
 
    var lbl = "";
    var tmp = "";
    var pobj="";

       lbl = 'header_debug_spot';
       pobj = document.getElementById(lbl);
       if (pobj != null) {
          pobj.innerHTML = tmp;
       }
}


