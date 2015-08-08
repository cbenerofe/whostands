
 poster.prototype.build_rung = function() {

       var tmpstr = "";
       var ocl = "";
       var lbl = "";
       var cls = '';
       var pobj = null;

     if (daviewer.zoom == true) {

         tmpstr=tmpstr+"<div id='" + this.rungster + "_zoom_btns' style='text-align:center;' >";

         if (!this.editing) {
	   tmpstr += "<a href='#' data-role='button' onclick='daviewer.unset_zoom();' style='padding:0px;' data-inline='true' >";
	   tmpstr += "unzoom";
	   tmpstr += "</a>";
	 }

         if (buddah == true) {
           ocl = this.varname +".toggle_editing();";
           tmpstr = tmpstr + "<button  onclick='"+ocl+"' data-inline='true' style='padding:0px;'  >";  
           if (this.editing) {
             tmpstr = tmpstr + "cancel";
           } else {
              tmpstr = tmpstr + "edit";
           }
           tmpstr = tmpstr + "</button>";

           lbl = "work_btns";
           tmpstr=tmpstr+"<span id='"+lbl+"' class='' style=''  >"; 
           tmpstr=tmpstr+"</span>";
 

         }
/*
         lbl = "share_btns";
         tmpstr=tmpstr+"<span id='"+lbl+"' class='' style='display:inline-block;vertical-align:bottom;'  >"; 
         tmpstr=tmpstr+"</span>";
*/

        tmpstr=tmpstr+"</div>";

   }

      if ((this.source == "twitter") && (daviewer.zoom == true)) {
//      if ((this.source == "twitter") && (daviewer.zoom == true) && (daviewer.editing==false)) {
//      if ((this.source == "twitter") && (daviewer.editing==false)) {
//           tmpstr += " <blockquote class='twitter-tweet'><a href='http://twitter.com/"+this.uname+"/status/"+this.pid+"' >link</a></blockquote>";
 	   lbl= this.rungster + "_tweet_spot";
	   tmpstr=tmpstr+"<div id='"+lbl+"'  src='' style=''  >"; 
           tmpstr=tmpstr+"</div>";

      } else {

           if (this.is_mini == true) {
   	        lbl= this.rungster + "_pic_spot";
	        tmpstr=tmpstr+"<img id='"+lbl+"' src=''  >"; 
                tmpstr=tmpstr+"</img>";

                lbl= this.rungster + "_story_spot";
	        tmpstr=tmpstr+"<p id='"+lbl+"'  class=''   style='font-weight:normal;' >"; 
	        tmpstr=tmpstr+"</p>";
           } else {

              if (daviewer.zoom == false)  {
                  ocl = "daviewer.zoom=true;daviewer.to_top("+this.rung+");";
	          tmpstr=tmpstr+"<a href='#'  class='' onclick='"+ocl+"' style='white-space:normal;' >";
              }

	  	  lbl= this.rungster + "_pic_spot";
	          tmpstr=tmpstr+"<span id='"+lbl+"'  src='' style='float:left;padding-right:10px;'  >"; 
                  tmpstr=tmpstr+"</span>";

                  cls = "story";
                  if (daviewer.zoom == true) {
                    cls = "storyzoom";
                  }
	          lbl= this.rungster + "_story_spot";
                  tmpstr=tmpstr+"<div id='"+lbl+"'  class='"+cls+"'   style='' >"; 
                  tmpstr=tmpstr+"</div>";	

 		  lbl= this.rungster + "_link_btn";
                  tmpstr=tmpstr+"<span id='"+lbl+"' class=''  style=''  >"; 
    	          tmpstr=tmpstr+"</span>";
  	          
		  lbl= this.rungster + "_embed_btn";
                  tmpstr=tmpstr+"<span id='"+lbl+"' class=''  style=''  >"; 
    	          tmpstr=tmpstr+"</span>";

 		  lbl= this.rungster + "_date_spot";
	          tmpstr=tmpstr+"<span id='"+lbl+"'  class=''   style='font-weight:normal;' >"; 
		  tmpstr=tmpstr+"</span>";	

	          tmpstr=tmpstr+"<div style='clear:both;' ></div>";	

                      lbl= this.rungster + "_name_spot";
	              tmpstr=tmpstr+"<span id='"+lbl+"' class='' style='' >";
                      tmpstr=tmpstr+"</span>";
 
               if (daviewer.zoom == false)  {
                 tmpstr=tmpstr+"</a>";	
               } 

               if (this.listype == "people")   {

       	          lbl= this.rungster + "_nav_btns";
   	          tmpstr=tmpstr+"<span id='"+lbl+"' class='' style='' >"; 
    	          tmpstr=tmpstr+"</span>";

                 lbl= this.rungster + "_mini";
                  tmpstr=tmpstr+"<span id='"+lbl+"' class='' style=''  >"; 
                  tmpstr=tmpstr+"</span>";
               }
           }

        }
            
            if (daviewer.zoom == true) {

         	tmpstr = tmpstr + "<br>";  
	
  	    	lbl = this.rungster + "_work_btns";
         	tmpstr = tmpstr + "<span  id='"+lbl+"' style='' >";  
	 	tmpstr = tmpstr + "</span>";
 
  	    	lbl = this.rungster + "_send_btns";
         	tmpstr = tmpstr + "<span  id='"+lbl+"' style='' >";  
	 	tmpstr = tmpstr + "</span>";
 
                  if (buddah==true) {
	            lbl = this.rungster + "_tag_spot";
                    tmpstr = tmpstr + "<span  id='"+lbl+"' style='' >";  
 	            tmpstr = tmpstr + "</span>";
                   }

                  if (this.shape == "getpic") {
  	              lbl= this.rungster + "_getpic";
	              tmpstr=tmpstr+"<div  id='"+lbl+"' style='' >";
                      tmpstr=tmpstr+"</div>";
//                      tmpstr=tmpstr+"<div style='clear:right;' ></div>";

  	              lbl= this.rungster + "_upic_frame";
		      var z = "";
                      z = this.varname+".get_newpic();";
                      tmpstr=tmpstr+"<iframe id='"+lbl+"' name='"+lbl+"_name' onload='"+z+"' src='' style='display:none;' >"; 
                      tmpstr=tmpstr+"</iframe>";
                  }

        	  lbl= this.rungster + "_link_spot";
                  tmpstr=tmpstr+"<div id='"+lbl+"' class=''  style=''  >"; 
    	          tmpstr=tmpstr+"</div>";
        
		  lbl= this.rungster + "_embed_spot";
                  tmpstr=tmpstr+"<div id='"+lbl+"' class=''  style=''  >"; 
    	          tmpstr=tmpstr+"</div>";

            }

           if (debug == true) {
  	      lbl= this.rungster + "_debug_spot";
	      tmpstr=tmpstr+"<div id='"+lbl+"' class='"+cls+"' style='' >"; 
              tmpstr=tmpstr+"</div>";
            }

      if (this.editing == true) {
           lbl = "change_btns";
           tmpstr=tmpstr+"<div id='"+lbl+"' class='' style='text-align:center;'  >"; 
           tmpstr=tmpstr+"</div>";
      }
 
      lbl = this.spotid + "_rung_" + this.rung;
      pobj = document.getElementById(lbl);
      if (pobj != null) {
         pobj.innerHTML=tmpstr;
         $('#' + this.rungster + '_zoom_btns').trigger("create");
     }
}


poster.prototype.draw_rung = function() {
 
 //     if ((this.source == "twitter") && (daviewer.zoom == true) && (daviewer.editing==false)) {
       if ((this.source == "twitter") && (daviewer.zoom == true)) {
          var s = "https://api.twitter.com/1/statuses/oembed.json?id="+this.pid+"&callback=?";
       //   alert(s);
          var self = this;
          $.getJSON(s, function(data)
	      {
      	        var lbl= self.rungster + "_tweet_spot";
               $('#'+lbl).html(data.html);
          });
      
      } else { 

          if (this.is_mini == true) {
             this.draw_story();
             if (this.listype == 'people') { 
              var s= "";
              var se1,se2 = null;
              se1 = eval(this.parvar);
              se2 = se1.parvar;
              if (se2 != undefined) {
                s = se2.picurl;
                if (this.picurl != s) {  
                  this.draw_pic();
                }
                s = se2.uname;
                if (this.uname != s) {  
                  this.draw_name();
                }
              }
            }

          } else {

            if (this.shape == "getstory" ) {
               this.get_story();
            } else {
               this.draw_story();
            }

            if (this.shape == "getpic") {
               this.get_pic();
            } else {
               this.draw_pic();
            }

            if (this.mini_showing == true) {
              this.show_mini();
            }

            if (this.shape == "getname") {
               this.get_name();
            } else {
               this.draw_name();
            }

        //    this.draw_date();
         } 

       } // end else not mini

            if (this.shape == "getlink") {
               this.get_link();
            } else {
     //          this.draw_link();
            }

            if (this.shape == "getembed") {
               this.get_embed();
            } else {
               this.draw_embed();
            }

            if (this.shape == "gettags")  {
              this.get_tags();
            } else {
              if (buddah == true) {
  	      //  this.draw_tags();
	      }
	    }

            if (buddah == true) {
//              this.draw_groups();
            }
      

      $('#'+this.rungster).trigger("create");

 	 if (daviewer.zoom == true) {
	   if (this.editing == true) {
	     this.work_btns();
	     this.change_btns();
	   } else {
	     this.share_btns();
	   }
        }
  
        if (debug == true) {
          this.draw_debug();
        }
}



 poster.prototype.hide_rung = function(lspot) {

   var t = this.rung;
   if (lspot != undefined) {
      t = lspot;
   }

    var tmpstr = "";
    var lbl = "";
 
    lbl = this.spotid + "_rung_" + t;
    var pobj = document.getElementById(lbl);
    if (pobj!= null) {
        pobj.innerHTML=tmpstr;
    }
}



poster.prototype.share_btns = function() {
       var tmp = "";
       var lbl = "";
       var ocl="";
       var cls = "";
       var s = "";

       tmp = tmp + "<a href='https://twitter.com/share' class='twitter-share-button' data-url='http://twitter.com/statuses/"+ s +"' data-count='none'></a>";
 
      lbl = this.rungster + '_share_btns';
     pobj = document.getElementById(lbl);
    
     if ( pobj != null) {
          pobj.innerHTML = tmp;
          nicky.twitter_render();
     }
  

}

 
poster.prototype.work_btns = function() {
       var tmp = "";
       var lbl = "";
       var ocl="";
       var cls = "";
 
        var s = this.varname;
 
	 ocl = s + ".toggle_getstory();";
         tmp = tmp + "<button  onclick='"+ocl+"'  data-inline='true' style='padding:0px;'  >";  
	 tmp = tmp + "<img src='images/pencil_msg.png' height='20px' >";
	 tmp = tmp + "</button>";

	 ocl = s + ".toggle_getpic();";
         tmp = tmp + "<button  onclick='"+ocl+"'  data-inline='true' style='padding:0px;'  >";  
	 tmp = tmp + "<img src='images/camera.png' height='20px' >";
	 tmp = tmp + "</button>";

	 ocl = s + ".toggle_getlink();";
         tmp = tmp + "<button  onclick='"+ocl+"'  data-inline='true' style='padding:0px;'  >";  
	 tmp = tmp + "<img src='images/link-black.jpg' height='20px' >";
	 tmp = tmp + "</button>";

	 ocl = s + ".toggle_getembed();";
         tmp = tmp + "<button  onclick='"+ocl+"'  data-inline='true' style='padding:0px;'  >";  
	 tmp = tmp + "<img src='images/embed.jpg' height='20px' >";
	 tmp = tmp + "</button>";
/*
	 ocl = s + ".toggle_getname();";
         tmp = tmp + "<button  onclick='"+ocl+"'  data-inline='true' style='padding:0px;'  >";  
	 tmp = tmp + "<img src='images/people_clay.png' height='20px' >";
	 tmp = tmp + "</button>";
*/
	 ocl = s + ".toggle_gettags();";
         tmp = tmp + "<button  onclick='"+ocl+"'  data-inline='true' style='padding:0px;'  >";  
	 tmp = tmp + "<img src='images/sort.png' height='20px' >";
	 tmp = tmp + "</button>";

      if (this.listype == "people") {
	 ocl = s + ".toggle_getgroup();";
         tmp = tmp + "<button  onclick='"+ocl+"'  data-inline='true' style='padding:0px;'  >";  
	 tmp = tmp + "<img src='images/people_blob.png' height='20px' >";
	 tmp = tmp + "</button>";
      }

     lbl = 'work_btns';
     pobj = document.getElementById(lbl);
    
     if ( pobj != null) {
          pobj.innerHTML = tmp;
         $('#work_btns').trigger("create");
     }
}

 
poster.prototype.hide_zoombtns = function() {
       var tmp = "";
       var lbl = "";
 
     lbl = 'zoom_btns';
     $('#'+lbl).html("");

}



poster.prototype.change_btns = function() {
     var tmp = "";
     var lbl = "";
     var ocl="";
     var s = "";

     if (this.changed == true) {
 
       s = this.varname;
 
          if (this.listype == "newbie") {
            ocl =  "amare.del_newbie();";
            tmp = tmp + "<button  id=''  onclick='"+ocl+"' >";
            tmp = tmp + "delete";
            tmp = tmp + "</button>";
          } else {
            ocl = s + ".do_undo();";
            tmp = tmp + "<button  id=''  data-inline='true' style='padding:0px;' onclick='"+ocl+"' >";
               tmp = tmp + "undo";
//           tmp = tmp + "<img src='images/black_undo.png' height='20px' >";
            tmp = tmp + "</button>";
          }

          if (this.listype == "people") {

              ocl = s+".update_person();";
              if (this.stored == false) {
 		ocl = s+".add_person();";
	      }
              tmp=tmp + "<button   onClick='"+ocl+"'   data-inline='true' style='padding:0px;'   >";  
              tmp = tmp + "save";
//              tmp = tmp + "<img src='images/up_arrow_circle.png' height='20px' >";
              tmp = tmp + "</button>";

	 } else  {

              ocl = s+".update_webit();";
              if (this.stored == false) {
 		ocl = s +".add_webit();";
	      }
              tmp=tmp + "<button id='' onClick='"+ocl+"'  data-inline='true' style='padding:0px;'   >";  
              tmp = tmp + "save";
//             tmp = tmp + "<img src='images/up_arrow_circle.png' height='20px' >";
              tmp = tmp + "</button>";

 	  } 
     }

     lbl = this.rungster + '_change_btns';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmp;
               $('#change_btns').trigger("create");
     }
}


poster.prototype.toggle_oembed = function () {
   if (this.oembed == true ) {
       this.oembed = false;
   } else {
       this.oembed = true;
   }
   this.draw_rung();
}


poster.prototype.toggle_editing = function () {

   if (this.editing == true ) {
       this.editing = false;
       this.shape = "";
       this.build_rung();
       this.draw_rung();
   } else {

     $this = this;
     var url = "cbdbase/get_webit.php?webit_id=" + this.webit_id;
//alert(url);

     $.getJSON(url,function(json) {
//alert(JSON.stringify(json.pobj));
            $this.editing = true;
            amare.update_webit(json.pobj);
     });
    
   }
}



