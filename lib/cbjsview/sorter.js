
function sorter (pspotid) { 

   this.spotid = pspotid + "_spot";
   this.varname = "mac";
   this.shape = "";  
   this.showing = false;

   this.sterms = "standing desk";
   this.da_date = new Date();
   this.months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
}

sorter.prototype.show = function() {

   var tmp = "";
   var cls="";
   var pobj = null;
   var lbl = "";
   var ocl="";

     if ($(window).width() < 800) { 

         tmp += "<div  id='' class='' style='display:inline-block;'  >";

	tmp += "<label for='select-year' class='select'></label>";
 	tmp += "<select name='select-year' data-mini='true' data-inline='true' id='select-year'>";
   	tmp += "  <option value='2015'>2015</option>";
 	tmp += "  <option value='2014'>2014</option>";
 	tmp += "  <option value='2013'>2013</option>";
 	tmp += "  <option value='2012'>2012</option>";
  	tmp += "  <option value='2011'>2011</option>";
 	tmp += "</select>";
  
       tmp = tmp + "</div>";

         tmp += "<div  id='' class='' style='display:inline-block;'  >";

	tmp += "<label for='select-month' class='select'></label>";
 	tmp += "<select name='select-month' data-mini='true' data-inline='true' id='select-month'>";
        var sugs = amare.monthstats;
        for (var i=0;i<sugs.length;i++) {
          ocl = this.varname + ".set_month("+sugs[i].month + ");";
         var month = this.months[sugs[i].month];
          var year = sugs[i].year;
          if (year == this.da_date.getFullYear()) {
        	tmp += "  <option value='"+sugs[i].month+"' >"+month+"</option>";
          }
        }
 	tmp += "</select>";
        tmp = tmp + "</div>";

     } else {

	tmp += "<label for='select-year' class='select'></label>";
 	tmp += "<select name='select-year' data-mini='true' data-inline='true' id='select-year'>";
  	tmp += "  <option value='2015'>2015</option>";
 	tmp += "  <option value='2014'>2014</option>";
 	tmp += "  <option value='2013'>2013</option>";
 	tmp += "  <option value='2012'>2012</option>";
  	tmp += "  <option value='2011'>2011</option>";
 	tmp += "</select>";
   	tmp = tmp +"<h3></h3>";

   	tmp = tmp +"<ul  data-role='listview' id='' style='min-width:150px;' data-inset='true'  >";
        var sugs = amare.monthstats;
        for (var i=0;i<sugs.length;i++) {
          ocl = this.varname + ".set_month("+sugs[i].month + ");";
 //          ocl = "alert(\""+ocl+"\");"; 
          var month = this.months[sugs[i].month];
          var year = sugs[i].year;
          if (year == this.da_date.getFullYear()) {
            tmp = tmp + "<li data-icon='false' ><a href='#'  onclick='"+ocl+"' >"+month+"<span class='ui-li-count'>"+sugs[i].lnum+" / " + sugs[i].cnum + "</span></a></li>";
          }
        }
        tmp = tmp + "</ul>";
        tmp=tmp+"</div>";
    }

   lbl = this.spotid;

   if (document.getElementById(lbl) != null) {
      document.getElementById(lbl).innerHTML=tmp;
      this.showing = true;
      $('#sort_spot').trigger('create');

       this.check_local();

        $('#select-year').val(this.da_date.getFullYear());

        if (jqm_off == false) {
          $('#select-year').selectmenu("refresh");
	}
        $('#select-year').bind("change",function(event,ui) {
             var s = $(this).val();
             mac.set_year(s); 
        });

        if ($(window).width() < 800) {
            $('#select-month').val(this.da_date.getMonth()); 

            if (jqm_off == false) {
              $('#select-month').selectmenu("refresh");
	    }

            $('#select-month').bind("change",function(event,ui) {
                var s = $(this).val();
                mac.set_month(s); 
            });
         }
   } 
}


sorter.prototype.check_local = function(bmore) {

   var dt = new Object;
   dt.month = this.da_date.getMonth();
   dt.year = this.da_date.getFullYear();
   daviewer.load_webitlist(dt);
   var lstat = amare.get_monthstat(dt);

   if (lstat != null) {
     if (bmore == true){
       if (lstat.cnum > lstat.lnum) {
         daviewer.more();
       }
     }
   }
  
}


sorter.prototype.set_month = function(pmon) {
 if (pmon != undefined) {
     var m = parseInt(pmon);
     this.da_date.setMonth(m);
     this.show();
     this.check_local(true);
   }
}

sorter.prototype.set_year = function(pyr) {

   if (pyr != undefined) {
     this.da_date.setYear(pyr);
     this.da_date.setMonth(0);
     this.show();
     this.check_local(true);
   }
}

 
 
sorter.prototype.save_set = function() {
    // loop through daviewer
    // call add on all of em 

    var len = daviewer.darungs.length;
    for (var i=0; i<len; i++) {
        if (daviewer.darungs[i].postman != undefined) {
	    daviewer.darungs[i].postman.add_webit();
        }
    }
    
}


sorter.prototype.set_shape = function(pstr) {
	if (pstr != undefined) {
          this.shape = pstr;
	}
	this.show();
}



sorter.prototype.change = function() {
    this.show();
}



sorter.prototype.hide = function() {

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

   $('sort_btn').removeClass("ui-btn-active");
   
}

  
sorter.prototype.show_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;
    var ocl = "";

       ocl = 'diego.set_tool(\"sort\");'
       tmp = tmp + "<button  data-role='button' data-inline='true' onclick='"+ocl+"'  style='background:white;' >";
       tmp = tmp + "<img src='images/categories.png' class='menu_btn' >";
       tmp = tmp + "</button>";
       lbl = 'sort_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
         $('#'+lbl).trigger("create");
       }
}

sorter.prototype.hide_btn = function() {
    var tmp = "";
    var lbl = "";
    var pobj = null;

       lbl = 'sort_btn'; 
       if (document.getElementById(lbl)!=null) {
         document.getElementById(lbl).innerHTML=tmp; 
       }
}



sorter.prototype.toggle = function() {
   if (this.showing == true) {
      this.hide();
   } else {
      this.show();
   }
}



