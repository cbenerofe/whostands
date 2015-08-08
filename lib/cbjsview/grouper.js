
function grouper (pspotid) {
 
   this.spotid = pspotid + "_spot";
   this.varname = "robby";
   this.showing = false;
   this.shape = "all"; //one
   this.groupid="";
}

grouper.prototype.show = function() {

     var tmp = "";
     var lbl = "";
     var ocl = "";
     var s = "";

     if (main_shape != "wide") {
 	tmp += "<div>";
	tmp += "<label for='select-group' class='select'></label>";
 	tmp += "<select name='select-group' data-mini='true' data-inline='true' id='select-group'>";
        sugs = amare.group_set.get_setlist();
        for (var i=0;i<sugs.length;i++) {
          ocl = this.varname + ".set_group(\""+sugs[i].groupid+"\");";
          tmp += "  <option value='"+sugs[i].groupid+"' >"+sugs[i].text+"</option>";
        }
	tmp += "</select>";
	tmp += "</div>";

     } else {
 
//       tmp=tmp+"<div data-role='collapsible' style='width:200px;' >";
//   	tmp = tmp +"<h3>people groups</h3>";
   	tmp = tmp +"<ul  data-role='listview' id='' style='width:175px;' data-inset='false'  >";
        sugs = amare.groupstats;
        for (var i=0;i<sugs.length;i++) {
          var gid = sugs[i].groupid;
          ocl = this.varname + ".set_group(\""+gid+"\");";
          if (gid == "") { gid = "nogroup"; }
          tmp = tmp + "<li data-icon='false' ><a href='#'  onclick='"+ocl+"' >"+gid+"<span class='ui-li-count'>"+sugs[i].lnum + " / " + sugs[i].cnum+"</span></a></li>";
        }
        tmp = tmp + "</ul>";
//         tmp=tmp+"</div>";
     }

     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
          this.showing = true;
          $('#'+lbl).trigger("create");

          this.check_local();
          if (main_shape != "wide") {
            $('#select-group').val(this.groupid); 
            $('#select-group').selectmenu("refresh"); 
            $('#select-group').bind("change",function(event,ui) {
                var s = $(this).val();
                robby.set_group(s); 
            });
          }
     }
}

grouper.prototype.set_shape = function(pstr) {
    if (pstr != undefined ) {
      if (pstr != this.shape) {
        this.shape = pstr;
      }
    }
 
    this.show();

}


grouper.prototype.check_local = function(bmore) {

    daviewer.load_group_list(this.groupid);
   var lstat = amare.get_groupstat(this.groupid);
 
   if (lstat != null) {
     if (bmore == true){
       if (lstat.cnum > lstat.lnum) {
         daviewer.more();
       }
     }
   }
  
}


grouper.prototype.set_group = function (tgroupid) {
   if (tgroupid != undefined) {
     this.groupid = tgroupid;
   }
   this.check_local(true);
}


grouper.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}


grouper.prototype.change = function() {
	this.toggle();
}


grouper.prototype.hide = function() {
     var tmp = "";
     var lbl = "";

     lbl = this.spotid;
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
     }
     this.showing = false;

}

  
grouper.prototype.show_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;
    var ocl = "";
       ocl = 'diego.toggle_botshape(\"group\");'
       tmp = tmp + "<button  data-role='button' data-inline='true' onclick='"+ocl+"'  style='background:white;' >";
       tmp = tmp + "<img src='images/people_blob.png' class='menu_btn' >";
       tmp = tmp + "</button>";
       lbl = 'group_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
         $('#'+lbl).trigger("create");
       }
}

grouper.prototype.hide_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;

       lbl = 'group_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
       }
}


