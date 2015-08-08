
function logoman (pspot) {

  this.spotid = pspot + "_spot";
  this.varname= "sal";
  this.flip =0;
}


logoman.prototype.show = function () {

   var lbl = "";
   var tmp = "";
   var ocl = "";
   var cls = "";
   var sty ="";

         lbl = 'vman_btn'; 
          ocl = "daviewer.next();";
        tmp = tmp + "<a href='#' class='mybtns' data-role='button' data-theme='a' data-mini='true' data-inline='true' onclick='"+ocl+"'  style='' >";
       tmp = tmp + "<img id='vman_btn' src='images/loading-go.gif'  class='menu_btn'  >";
        tmp = tmp + "</a>";
    
         lbl = this.spotid + '_logo_spot1';
 
        if (jqm_off == false) {
         tmp=tmp+"<span onclick='"+ocl+"' class='screen_talk' style='' >";
        } else {
         tmp=tmp+"<span onclick='"+ocl+"' class='' style='background-color:white;' >";
        }
        
	tmp = tmp + "Who Stands Up @ Their Desk ?";
        tmp=tmp+"</span>";
      

   lbl = this.spotid;
   if (document.getElementById(lbl) !=null) {
       document.getElementById(lbl).innerHTML=tmp;
       $('#'+lbl).trigger("create");  
//       $(':button').button();  
//       dale.draw_raildata();
   }
}



logoman.prototype.draw_vman = function () {
   var lbl = "";
   var ocl="";   
   var tmp = "";
   var tmpsrc = "";
   var vm = "";

   var dt = new Date();
   this.flip = this.flip + 1;
          if (this.flip==0) {
            vm="stand-r";
          } else if (this.flip==1) {
            vm="sit-r";
          } else if (this.flip==2) {
            vm="sit-l";
          } else if (this.flip==3) {
            vm="stand-l";
          } else if (this.flip==4) {
            vm="stand-r";
          } else if (this.flip==5) {
            vm="sit-r";
          }  else if (this.flip==6) {
            vm="sit-l";
          }  else if (this.flip==7) {
            vm="stand-l";
          }  else if (this.flip==8) {
            vm="stand-r";
          }  else if (this.flip==9) {
            vm="sit-r";
             this.flip = 0;
          }  else  {
            vm="stand";
            this.flip = 0;
          } 
     tmpsrc = "images/cbman-"+vm+".png";

      $('#vman_btn').attr('src',tmpsrc);
     $('#vman_btn').trigger("create");

}


logoman.prototype.change_vman = function () {

   this.flip = this.flip + 1;
   if (this.flip > 9 ) { 
        this.flip = 0;
    } 

    var cl = this.varname + ".draw_vman();";
    var tmr = setTimeout(cl,250);

}


logoman.prototype.waiting = function () {

   var lbl = "";
   var tmp = "";
   var tsrc = "";
   tsrc = "images/loading-go.gif";
   lbl =  "vman_btn";
   $('#vman_btn').attr('src',tsrc);
   $('#vman_btn').trigger("create");
}



logoman.prototype.hide = function (bfull) {

   var lbl = "";
   var tmp = "";

   if (bfull == undefined) {
   }

   lbl = this.spotid;
 
  if (document.getElementById(lbl) !=null) {
         document.getElementById(lbl).innerHTML=tmp; 
         this.showing = false;
        $('#'+lbl).trigger("create");  
   }
}



