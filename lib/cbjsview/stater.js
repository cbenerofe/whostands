
function stat () { 

    this.sterms="";
    this.groupid="";
    this.month;
    this.year;
    this.desc="";
    this.listype="";
    this.lnum =0;
    this.cnum =0;
    this.last_chunk = -1;
    this.max_chunks;
}


function stater (url_base) { 
 
   this.url_base = url_base;

   this.webitlist = [];
   this.peoplelist = [];
   this.unsavedlist = [];
   this.newbielist = [];

   this.groupstats = [];
   this.monthstats = [];
   this.searchstats = [];

   this.total_webits = new stat();
   this.total_people = new stat();
   this.total_unsaved = new stat();

   this.total_newbies = new stat();
   this.total_newbies.listype="newbie";

   this.group_set = new group_provider();

   this.got_webits = false;
   this.got_stats = false;

}


stater.prototype.get_stats = function() {

   var url=this.url_base + 'get_stats.php';
//   alert(url);
   $.getJSON(url,function(json) {
       amare.update_stats(json);
   });    

} 


stater.prototype.update_stats = function (statobj) {

   if (statobj != undefined) {

     tp = new group_provider();
     s = "";
     for (z=0; z<statobj.groups.length;z++) {
        st = new stat();
        st.groupid=statobj.groups[z].groupid;
        st.cnum=statobj.groups[z].cnum;
	st.max_chunks = Math.round(st.cnum/da_limit);
        st.desc = tp.get_desc(st.groupid);
        st.listype = "people";
        st.last_chunk=-1;
        amare.groupstats.push(st);
     }

     s = "";
     for (z=0; z<statobj.months.length;z++) {
        st = new stat();
        st.month=statobj.months[z].month;
        st.year=statobj.months[z].year;
        st.cnum=statobj.months[z].cnum;
	st.max_chunks = Math.round(st.cnum/da_limit);
        st.listype = "webits";
        st.last_chunk=-1;
        amare.monthstats.push(st);
     }

      amare.total_webits.listype = "webits";
      amare.total_webits.cnum = statobj.total_webits;
      amare.total_webits.max_chunks = Math.round(amare.total_webits.cnum/da_limit);
      amare.total_webits.last_chunk = -1;

      amare.total_people.listype = "people";
      amare.total_people.cnum = statobj.total_people;  
      amare.total_people.max_chunks = Math.round(amare.total_people.cnum/da_limit);
      amare.total_people.last_chunk = -1;

      amare.total_unsaved.listype = "unsaved";
      amare.total_unsaved.lnum = 0;
      amare.total_unsaved.cnum = 0;
      amare.total_unsaved.max_chunks = -1;
      amare.total_unsaved.last_chunk = -1;

      amare.count_lwstats();
      amare.count_lpstats();

      this.got_stats = true;

// alert("ir="+ init_run + " gw=" + this.got_webits + " gs="+this.got_stats);

     var dt = null;
     var bd = new Date();

     if (init_run == true) {
           if (this.got_webits == true) {
                 init_run = false;
                 this.total_webits.last_chunk=0;
                 daviewer.update_stat(this.total_webits);
                 var st = Math.floor((Math.random() * this.webitlist.length) +1);
  		 dt = new Object;
                 dt.month = "all";
  		 dt.year = bd.getFullYear();
                 daviewer.load_webitlist(dt,st);
          }
      } else {
        daviewer.redraw_view();
      }
   }
}


stater.prototype.update_webits = function(listobj) {

       var r = 0;
       var found = false;
       var fndcount = 0;

       if (listobj == undefined) {
	       return;
       }
       var lstat = this.get_stat(listobj);
       if (lstat != null) {
          lstat.last_chunk = listobj.dachunk;
          daviewer.update_stat(lstat);
       } 

       if ( listobj.dalist.length > 0 ) { 
         for (var j=0;j<listobj.dalist.length;j++) {
            found = false;
            if (listobj.dalist[j] != undefined) {
               var found_at=-1;
               for (var i=0;i<this.webitlist.length;i++) {
                  if (this.webitlist[i] != undefined) {
                    if (listobj.dalist[j].pid == this.webitlist[i].pid) {
                      found = true; 
                      fndcount = fndcount + 1;
                      found_at = i;
                      break;
                    }
                  }
               } 
               if (found == true) {
                  this.webitlist[found_at] = listobj.dalist[j];
               } else {
                  this.webitlist.push(listobj.dalist[j]);
               }             
            }
         }
      }

      this.got_webits = true;
      this.count_lwstats();
 // alert("ir="+ init_run + " gw=" + this.got_webits + " gs="+this.got_stats);

     var dt = null;
     var bd = new Date();

    if (init_run == true) {
              if (this.got_stats == true) {
          	 init_run = false;
                 this.total_webits.last_chunk=0;
                 daviewer.update_stat(this.total_webits);
                 var st = Math.floor((Math.random() * this.webitlist.length) +1);
   		 dt = new Object;
                 dt.month = "all";
  		 dt.year = bd.getFullYear();
                 daviewer.load_webitlist(dt,st);
              }
      } else {
           daviewer.redraw_view();
           if ((buddah == true) && (diego.tool == "sort")) {
            mac.show();
          }

     }
    
}  


stater.prototype.update_people = function(listobj) {

       var r = 0;
       var found = false;
       var fndcount = 0;

       if ( listobj.peoplelist.length > 0 ) { 
         for (var j=0;j<listobj.peoplelist.length;j++) {
              found = false;
              var found_at=-1;
              for (var i=0;i<this.peoplelist.length;i++) {
                  if (this.peoplelist[i] != undefined) {
                    if (listobj.peoplelist[j].uname == this.peoplelist[i].uname) {
                      found = true; 
                      fndcount = fndcount + 1;
                      found_at = i;
                      break;
                    }
                  }
              }
              if (found == true) {
                  this.peoplelist.splice(found_at,1);
              }
              this.peoplelist.push(listobj.peoplelist[j]);
         }
      }

      this.got_people = true;
      this.count_lpstats();
      if (init_run == true) {
      } else {
         if ((buddah == true) && (diego.bot_shape == "group")) {
           robby.show();
         }
         daviewer.redraw_view();
      }
}  


stater.prototype.count_lwstats = function() {
    var i=0
    for (i=0; i<this.monthstats.length; i++) {
          this.monthstats[i].lnum = 0;
    }
    this.total_webits.lnum = 0;
    var top = this.webitlist.length;
    var d=0;
    for (d=0;d<top;d++) {
      if (this.webitlist[d] != undefined) {
        var dt = new Date();
        if (this.webitlist[d].created_at != null) {
	  var dp1 = this.webitlist[d].created_at.split(" ");
	  var dp2 = dp1[0].split("-");
	  dt = new Date(dp2[0], dp2[1] - 1, dp2[2]);
	}
	var m = dt.getMonth();
	var y = new String(dt.getFullYear());

	this.total_webits.lnum = this.total_webits.lnum + 1;
//alert(this.total_webits.lnum);
        for (var k=0; k<this.monthstats.length; k++) {
	    var dtmon = new Object();
	    dtmon.month =  this.monthstats[k].month;
            dtmon.year =  this.monthstats[k].year;
 	    if ((dtmon.month == m) && ( dtmon.year == y)) {
// alert("m=" + this.monthstats[k].month + " sm="+dtmon.month+" sy="+dtmon.year +" m="+m+" y="+y);
                this.monthstats[k].lnum = this.monthstats[k].lnum + 1;
            }
        }
      }
    } 

}


stater.prototype.count_lpstats = function() {
    var i=0;
    this.total_people.lnum = 0;
    for (i=0; i<this.groupstats.length; i++) {
          this.groupstats[i].lnum = 0;
    }
    var d=0;
    var g = 0;
    for (d=0;d<this.peoplelist.length;d++) {
      if (this.peoplelist[d] != undefined) {
        g = this.peoplelist[d].groupid;
        if (this.peoplelist[d].groupid == "") {
  	    this.total_people.lnum = this.total_people.lnum + 1;
	} else {	
	  for (var l=0; l<this.groupstats.length; l++) {
            if (this.groupstats[l].groupid == g) {
              this.groupstats[l].lnum = this.groupstats[l].lnum + 1;
            }
          }
	}
     }
   }

}


stater.prototype.get_webit_by_id = function(webit_id) {
   var s = "";
   var pobj = null;
 
   if (webit_id == undefined) {
     return pobj;
   }
   var found = false;
   var dadex = -1;
   while ((found == false) && (dadex <= this.webitlist.length)) {
	dadex = dadex+1;
        if (this.webitlist[dadex] != undefined) {
          if (this.webitlist[dadex].webit_id == webit_id){
            found = true;
          }
        }
   }

   if (found == true) {
     pobj = this.get_webit(dadex,"webits");
   }

   return pobj; 
}
 


stater.prototype.get_webit = function(pdadex,plistype) {
   var s = "";
   var pobj = null;
 
   if (pdadex == undefined) {
     return pobj;
   }

   if (plistype == undefined) {
       return pobj;
   }

    this.stored = true;
    if (plistype == "webits") {
        s =  "amare.webitlist[" + pdadex + "]";
    } else if (plistype == "people") {
        s =  "amare.peoplelist[" + pdadex + "]";
    } else if (plistype == "unsaved") {
        s =  "amare.unsavedlist[" + pdadex + "]";
	this.stored = false;
    } else if (this.listype == "newbie") {
        s =  "amare.newbielist[" + pdadex + "]";
	this.stored = false;
    } 

    pobj = eval(s);
   return pobj; 
}
 

stater.prototype.get_stat = function (pstat) {

     var ret = null;

	if (pstat != undefined) {
                if ((pstat.sterms != "") && (pstat.sterms != undefined)) {
//                     ret = this.get_searchstat(pstat.sterms);
                     ret  = pstat;

		} else if (pstat.listype == "people" ) {

		     ret = this.get_groupstat(pstat.groupid);

		} else if  (pstat.listype == "webits" ) {

			if (pstat.month == "all" )  {
	  	             ret = this.total_webits;
			} else {
	       	             ret = this.get_monthstat(pstat);
			}

		} else if  (pstat.listype == "unsaved" ) {
		     ret =  this.total_unsaved;

		}

	}
    return ret;
}




stater.prototype.update_webit = function(pobj) {

      var fnd = -1;
      var j = "";                    
      var u = 0;
      var s = 0;
      var mdex = -1;
      var ltype = "";


// check unsaved ...
	
 		s = 0;
                while (s<this.unsavedlist.length) {
                  if (this.unsavedlist[s] != undefined) {
                    if (this.unsavedlist[s].pid == pobj.pid) {
                      this.unsavedlist[s] = pobj;
	   	      fnd = s;
                    }
                  }
	          s = s + 1;
                }
		if (fnd != -1) {
//alert("found unsaved");
	    // remove from unsaved list	
                    // update stats
		    this.unsavedlist.splice(fnd,1);
		}


//check webitslist 


        for (var k=0; k<this.webitlist.length; k++) {
          if (this.webitlist[k] != undefined) {
            if (this.webitlist[k].pid == pobj.pid) {
                this.webitlist[k] = pobj;
		fnd = k;
            }
          }
        }
	if (fnd != -1) {

		// update webitlist 
		ltype = "webits";
		mdex = fnd;
	 	pobj.ltype = "webits";
                this.webitlist[fnd] = pobj; 
//alert("found webitlist mdex =" +mdex);

	} else {

   	 	ltype = "webits";
		 pobj.ltype = "webits";
 		 mdex = this.webitlist.push(pobj); 
//alert("add to webitlist");

	}


      amare.count_lwstats();

     if ((buddah == true) && (diego.tool == "sort")) {
        mac.show();
     }

     daviewer.update_one(pobj.pid,mdex,ltype);

// check people

      if ((pobj.groupid != "") && (pobj.groupid != undefined)) {
        fnd = -1;
        for (var k=0; k<=this.peoplelist.length; k++) {
          if (this.peoplelist[k] != undefined) {
            if (this.peoplelist[k].uname == pobj.uname) {
                this.peoplelist[k].groupid = pobj.groupid;
                fnd = k;
            }
          }
        }
        if (fnd == -1) {
            var w = new webit();
            w.uname = pobj.uname;
            w.groupid = pobj.groupid;
            this.peoplelist.push(w);
        }
        daviewer.update_person(pobj.uname);
      }


}


stater.prototype.update_webitags = function(webit_id, tagarray) {
  var pobj = null;
  pobj = this.get_webit_by_id(webit_id);
  if (pobj != null) {
     pobj.tags = JSON.parse(tagarray);
     daviewer.update_tags(pobj); 
  }
}

stater.prototype.get_searchstat = function(sterms) {

     var ret = null;

     if ( (sterms != "") && (sterms  != undefined))  {

        for (var i=0; (i < amare.searchstats.length); i++) {
          if (amare.searchstats[i].sterms == sterms) {
              ret = amare.searchstats[i];
          }
        }

     }
     if (ret == null) {
        ret = new stat();
        ret.sterms = sterms;
     }

     return ret;
}




stater.prototype.get_monthstat = function(pmon) {
  
    var ret = null;
    if ((pmon == undefined) || (pmon.month == "all")) {
	ret = this.total_webits;
    } else {
  
      for (var i=0; i<this.monthstats.length; i++) {
        if ((this.monthstats[i].month == pmon.month) && (this.monthstats[i].year == pmon.year)) {
              ret = amare.monthstats[i];
        }
      }
    }

    return ret;

}


stater.prototype.get_groupstat = function(tp) {
    var ret = null;
     if (tp == "") {
        ret = this.total_people;
     } else {
       for (var i=0; i<this.groupstats.length; i++) {
        if (this.groupstats[i].groupid == tp) {
              ret = amare.groupstats[i];
         }
       }
     }
    return ret;
}


stater.prototype.get_person_group = function(tname) {
    var ret = "";
    for (var i=0; i<this.peoplelist.length; i++) {
        if (this.peoplelist[i].uname == tname) {
              ret = this.peoplelist[i].groupid;
        }
    }
    return ret;
}


stater.prototype.get_people = function(tchunk) {

   var url= this.url_base + 'get_people.php';
   url = url + "?lim="+ da_limit;
   var c = this.total_people.last_chunk; 
   if (c != -1) {
      c = c +1;
      url = url + "&chunk="+ c;
   }
//   alert(url);
   $.getJSON(url,function(json) {
       amare.update_people(json);
   });   // end get json 
   sal.waiting();
}


stater.prototype.get_group = function(pgroupid) {

   var url= this.url_base + 'get_people.php';
   url = url + "?lim="+ da_limit;
   url = url + "&groupid="+ pgroupid;
 
   var pstats = this.get_groupstat(pgroupid);
   var c = pstats.last_chunk; 
   if (c != -1) {
      c = c +1;
      url = url + "&chunk="+ c;
   }
//  alert(url);
   $.getJSON(url,function(json) {
       amare.update_people(json);
   });    
   sal.waiting();
}
 


stater.prototype.get_webits = function(pstats,bgrnd) {

   var dstats = this.total_webits;
   if (pstats != undefined) {
       dstats = pstats;
   }

   var url=this.url_base + 'get_webits.php';
//   url = url + "?unsorted=true&lim="+ da_limit;
   url = url + "?lim="+ da_limit;
   var m = 0;

   var gots = false;
   if ((dstats.month != undefined) && (dstats.month != "all")) {
       m = dstats.month +1;
       url = url + "&month="+ m;
       gots = true;
   } 
   if ((dstats.year != undefined) && (dstats.year != "")) {
       url = url + "&year="+ dstats.year;
       gots = true;
   }

   var c = 0;
   if (dstats.last_chunk != undefined) {
     c = dstats.last_chunk; 
     c = parseInt(c,10) +1;
   }

   url = url + "&chunk="+ c;
//   alert(url);

     $.getJSON(url,function(json) {
        amare.update_webits(json);
     });
 
   sal.waiting();

}



stater.prototype.get_csearch_list = function(tsterms) {

   var url=this.url_base + 'get_webits.php';
   url = url + "?lim="+ da_limit;
   if ((tsterms != "") &&  (tsterms != undefined)){
     url = url + "&sterms="+ tsterms;
     this.sterms = tsterms;
   } 
//   alert(url);
   $.getJSON(url,function(json) {
      amare.update_webits(json);
   });   // end get json 
   sal.waiting();

}  




stater.prototype.get_cperson_list = function(tuname) {

   var url=this.url_base + 'get_webits.php';
   url = url + "?lim="+ da_limit;
   if ((tuname != "") &&  (tuname != undefined)){
     url = url + "&uname="+ tuname;
   } 
//   alert(url);
   $.getJSON(url,function(json) {
      amare.update_webits(json);
   });   // end get json 
   sal.waiting();

}  



stater.prototype.add_unsaved = function(listobj) {

       var r = 0;
       var found = false;
       var fndcount = 0;

       if (listobj == undefined) {
	       return;
       }

       var lstat = this.get_stat(listobj);
       if (lstat != null) {
            daviewer.update_stat(lstat);
       }

       if (listobj.dalist == null) {
          return;
       }

       if ( listobj.dalist.length > 0 ) { 
         for (var j=0;j<listobj.dalist.length;j++) {
              found = false;
              var found_at=-1;
              for (var i=0;i<this.unsavedlist.length;i++) {
                  if (this.unsavedlist[i] != undefined) {
                    if (listobj.dalist[j].pid == this.unsavedlist[i].pid) {
                      found = true; 
                      fndcount = fndcount + 1;
                      found_at = i;
                      break;
                    }
                  }
              }
              if (found == true) {
                  this.unsavedlist.splice(found_at,1);
              }
              this.unsavedlist.unshift(listobj.dalist[j]);
         }
      }

      this.total_unsaved.lnum = this.unsavedlist.length;
      daviewer.redraw_view();

}  




 stater.prototype.add_webit = function(tpobj) {

   var t=-1;
   if (tpobj != undefined) {
     if (tpobj.listype == "webits") {
       t=  this.webitlist.push(tpobj);
     }
   }
   if (t != -1) {
     var dx = t-1;
   }
}


 stater.prototype.del_webit= function(tpid) {

  daviewer.del_webit(tpid);
   for (var k=0; k<=this.webitlist.length; k++) {
     if (this.webitlist[k] != undefined) {
         if (this.webitlist[k].pid == tpid) {
             this.webitlist[k] = null;
         }
     }
   }
}


stater.prototype.del_newbie = function(ndex) {

    // splice dex, redraw_view
    
    this.newbielist.splice(ndex,1);
    daviewer.redraw_view(); 

}




 stater.prototype.update_person= function(pobj) {
     var fnd = -1;
     if (pobj.listype == "people") {
        fnd = -1;
        for (var k=0; k<=this.peoplelist.length; k++) {
          if (this.peoplelist[k] != undefined) {
            if (this.peoplelist[k].uname == pobj.uname) {
                this.peoplelist[k] = pobj;
                fnd = k;
            }
          }
        }
        if (fnd == -1) {
            this.peoplelist.push(pobj);
        }
        daviewer.update_person(pobj.uname);
     }
}



 stater.prototype.del_person= function(tuname) {

   daviewer.del_person(tuname);

   for (var k=0; k<=this.peoplelist.length; k++) {
     if ((peoplelist[k] != undefined)&&(peoplelist[k] != undefined)){
         if (peoplelist[k].uname == tuname) {
             peoplelist[k] = null;
         }
     }
   }

}


