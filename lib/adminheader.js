
function adminheader () {

   this.tools = ['sort:mac','feed:louie','group:robby']; 
   this.tool = "";
   this.varname = "diego";
   this.shape = "thin";

}	

adminheader.prototype.show = function () {

     var tmp = "";
     var lbl = "";
     var ocl = "";

     tmp = tmp + "<span id='right_spot' class='' style='float:right;' >";
     tmp = tmp + "</span>";

     tmp = tmp + "<span  id='left_spot' class='' style='float:left;'  >";
     tmp = tmp + "</span>";

     tmp = tmp + "<div id='' class='' style='clear:both;' ></div>";

     tmp = tmp + "<span  id='bleft_spot' class='' style=''  >";
     tmp = tmp + "</span>";

     tmp = tmp + "<span id='bright_spot' class='' style='' >";
     tmp = tmp + "</span>";

     tmp = tmp + "<span style='clear:right;' ></span>";
     tmp = tmp + "</div>";

      var pobj = document.getElementById('menu_spot');
      if (pobj != null) {
            pobj.innerHTML = tmp;
            this.draw_left();
            this.draw_right();          
            this.draw_bot();          
            this.draw_sidebar();
            sal.show();
            this.set_tool();
            $('#menu_spot').trigger("create");

            if (debug == true) {
               this.draw_debug();
            } 
      }
}


adminheader.prototype.set_tool = function (ptool) {
     if (ptool != undefined) {
        this.tool = ptool;
     }

     if (this.tool == "") {

      for (var i=0;i<this.tools.length;i++) {
         s = this.tools[i].split(':');
         es = s[1] + '.hide();';
         es = es + s[1] + '.show_btn();';
         es = " if (" + s[1] + " != null) { "+es+"}";
         eval(es);
      }

     } else {
 
      var s , es = "";
      for (var i=0;i<this.tools.length;i++) {
         s = this.tools[i].split(':');
         es = s[1] + '.hide();';
        if (s[0] == this.tool) {
            es = s[1] + '.show();';
        }
        es = " if (" + s[1] + " != null) { "+es+"}";
        eval(es);
      }

    }
 
      if (main_shape == 'thin' ) {
         $('#adside_bar').css('width','100%');
         $('#admain_spot').css('width','100%');
       } else {
         if (this.tool == "") {
	   $('#adside_bar').css('width','100%');
	   $('#admain_spot').css('width','100%');
         } else {
           $('#adside_bar').css('width','20%');
           $('#admain_spot').css('width','80%');
	}
       }
   
    daviewer.draw_view();

    $('.mybtns').trigger("create"); 
}


adminheader.prototype.set_shape = function () {

      if (main_shape == 'thin' ) {
         $('#adside_bar').css('width','100%');
         $('#admain_spot').css('width','100%');
       } else {
         if (this.tool == "") {
	   $('#adside_bar').css('width','100%');
	   $('#admain_spot').css('width','100%');
         } else {
           $('#adside_bar').css('width','20%');
           $('#admain_spot').css('width','80%');
	}
       }

    this.set_tool();
}


adminheader.prototype.draw_left = function () {
        var lbl = "";
        var ocl = "";
        var tmp = "";
        ocl = 'diego.set_tool(\"\");';
 
        tmp = tmp + "<div  id='' class='' style='display:inline-block;'  >";
        tmp = tmp + "<a href='#' class='mybtns' data-role='button' data-theme='a' data-mini='true' data-inline='true' onclick='"+ocl+"'  style='' >";
 
	tmp = tmp + "<img id='vman_btn' src='images/cbman-stand-0.png' class='menu_btn' style='' >";
	tmp = tmp + "</a>";
 	tmp = tmp + "<span class='screen_talk' style='' >Who Stands Up ?</span>";
        tmp = tmp + "</div>";
    
    lbl = 'left_spot';
    $('#'+lbl).html(tmp); 
    $('#'+lbl).trigger("create");

}


adminheader.prototype.draw_right = function () {

     var lbl = "";
     var tmp = "";
     var ocl = "";

        tmp = tmp + "<div id='' class='' style='display:inline;vertical-align:top;padding-right:5px;'  >";

        lbl = 'sort_btn';
        ocl = 'diego.set_tool(\"sort\");'
        tmp = tmp + "<a href='#' class='mybtns' data-role='button' data-theme='a' data-mini='true' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='dist/images/icons-png/calendar-black.png'  class='menu_btn'  >";
        tmp = tmp + "</a>";

        lbl = 'feed_btn';
        ocl = 'diego.set_tool(\"feed\");'
        tmp = tmp + "<a href='#' class='mybtns' data-role='button' data-theme='a' data-mini='true' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='images/cloud.png'  class='menu_btn'  >";
        tmp = tmp + "</a>";

        lbl = 'group_btn';
        ocl = 'diego.set_tool(\"group\");'
        tmp = tmp + "<a href='#' class='mybtns' data-role='button' data-theme='a' data-mini='true' data-inline='true' onclick='"+ocl+"'  style='' >";
        tmp = tmp + "<img  src='images/people_blob.png'  class='menu_btn'  >";
        tmp = tmp + "</a>";

        tmp = tmp + "</div>";

     lbl = 'right_spot';
     $('#'+lbl).html(tmp); 
     $('#'+lbl).trigger("create");
}

adminheader.prototype.draw_bot = function () {

    var lbl = "";
    var tmp = "";
 
    ocl = 'daviewer.prev();'
    tmp += "<a href='#' onclick='"+ocl+"' data-role='button' data-inline='true'  data-icon='arrow-l' data-iconpos='notext'>prev</a>";

    tmp = tmp + "<span id='rail_spot' class='' style=''  >";
    tmp = tmp + "</span>";
 
    ocl = 'daviewer.next();'
    tmp += "<a href='#' onclick='"+ocl+"' data-role='button' data-inline='true'  data-icon='arrow-r' data-iconpos='notext'  style=''  >next</a>";
 
    lbl = 'bleft_spot';
    $('#'+lbl).html(tmp); 

    dale.show();
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

    wanda.show();
}

 
adminheader.prototype.draw_sidebar = function () {

     var lbl = "";
     var tmp = "";
     var ocl = "";

      tmp = tmp + "<div id='browse_spot' class='' style=''  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='sort_spot' class='' style=''  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='feed_spot' class='' style=''  >";
      tmp = tmp + "</div>";
  
      tmp = tmp + "<div id='group_spot' class='' style=''  >";
      tmp = tmp + "</div>";

      tmp = tmp + "<div id='create_spot' class='' style=''  >";
      tmp = tmp + "</div>";

     lbl = 'adside_bar';
     $('#'+lbl).html(tmp); 

}
  

adminheader.prototype.hide_sidebar = function () {

     var lbl = "";
     var tmp = "";

     lbl = 'aside_bar';
     $('#'+lbl).html(tmp); 

}

adminheader.prototype.draw_debug = function () {
 
    var lbl = "";
     var tmp = "";
    var pobj="";

        lbl = 'header_debug_spot';
      tmp = tmp + "mshape=" + main_shape;
       pobj = document.getElementById(lbl);
       if (pobj != null) {
          pobj.innerHTML = tmp;
       }
}


