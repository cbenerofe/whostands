

viewer.prototype.prev = function(px) {
    var c = 1;
    if (px != undefined) {
	    c = px;
    }

    var bret = true;
    var n = this.listdex -c;
    if ( n <0 ) {
        n = this.dalist.length -1;
        bret = false;
    }
    this.load_rungs(n);
    this.draw_view();
    return bret;
}


viewer.prototype.next = function(px) {
    var c = 1;
    if (px != undefined) {
	    c = px;
    } 
    var bret = true;
    var n = this.listdex +c;
    if ( n >= this.dalist.length ) {
         n = 0;
        bret = false;
    }
    this.load_rungs(n);
    this.draw_view();
    return bret;
}



viewer.prototype.more = function() { 

   if (this.stats != undefined) {
 
         if (this.stats.listype == "webits") {

            amare.get_webits(this.stats);

   	 } else if (this.stats.listype == "people") {

            if (this.stats.groupid == "") {;
	      amare.get_people(this.stats);
            } else {
	      amare.get_group(this.stats.groupid);
            }
         } 
    }
}


viewer.prototype.goto_listdex = function(ldex) {

   this.load_rungs(ldex);
   this.draw_view();
}


viewer.prototype.goto_end = function() {
   var e = this.dalist.length -2;
   this.to_top(e);
}


viewer.prototype.to_top = function(trung) {
   this.redraw_rungs(trung);

   window.scroll(0,0);

   var lbl=this.screen+"_rung_0";
   if ( document.getElementById(lbl) != null) {
     document.getElementById(lbl).focus(); 
   }
}


viewer.prototype.end_up = function(trung) {
	
  var e = this.darungs.length - 1;
   this.redraw_rungs(e);

   window.scroll(0,0);

   var lbl=this.screen+"_rung_0";
   if ( document.getElementById(lbl) != null) {
     document.getElementById(lbl).focus(); 
   }
}



viewer.prototype.prev_chunk = function() {

   var chunks = 0;
   var cur_chunk = 1;
   var chunk_fac =  1;
   var tot = 0;
   if (this.stats != null) {
    tot = this.stats.cnum;
    if (tot > 10) {
      chunk_size = Math.round(tot / 10);
      cur_chunk = Math.floor(this.listdex / chunk_size);
      chip_fac = Math.round(chunk_size / 10);
      st = Math.round(cur_chunk * chunk_size);
    } 

       this.prev(chunk_size);
   }

}


viewer.prototype.next_chunk = function() {

   var chunks = 0;
   var cur_chunk = 1;
   var chunk_size =  1;
   var tot = 0;
 
   if (this.stats != null) {
    tot = this.stats.cnum;
    if (tot > 10) {
      chunk_size = Math.round(tot / 10);
      cur_chunk = Math.floor(this.listdex / chunk_size);
      chip_fac = Math.round(chunk_size / 10);
      st = Math.round(cur_chunk * chunk_size);
    }

    var nt = this.listdex + chunk_size;
    if (nt > this.stats.cnum) {
	    nt = this.stats.cnum;
    }

    if (nt > this.stats.lnum) {
	             if (this.listype == "webits") {
          	       if ((this.cat == "all") || (this.cat == "")) {
                         amare.get_webits();
		       } else {
                         amare.get_cat_list(this.cat,this.subcat);
		       }
		     }
       
		     if (this.listype == "people") {
          	       if (this.groupid == "") {
                         amare.get_people();
		       } else {
                         amare.get_group_list(this.groupid);
		       }
		     }
    } else {
	    this.next(chunk_size);
    }
   }
}




viewer.prototype.update_stat = function(pstat) { 
   if (pstat != undefined) {
	   this.stats= pstat;
   }
} 


viewer.prototype.redraw_view = function() { 
   var start = 0;
   var dt = null;

    if (this.stats != null) {

      var j =  parseInt(this.stats.last_chunk); 
         start = j * da_limit;

	 if (this.stats.listype == "webits") {
             dt = new Object();
             dt.month = "all";
             if (this.stats.month != undefined) {
	       dt.month = this.stats.month;
	       dt.year = this.stats.year;
             }
	     this.load_webitlist(dt,start);

   	 } else if (this.stats.listype == "people") {
	    //alert(this.stats.groupid + "-" + this.stats.last_chunk );
	    start = 0;
	    this.load_group_list(this.stats.groupid,start);


         }  else if (this.stats.listype == "unsaved") {
	    this.load_unsaved_list();

         }   else if (this.stats.listype == "newbie") {
	    this.load_newbie_list();
         } 
    }
}


viewer.prototype.clear_list = function() {

    this.stats = new stat();
    this.stats.lnum = 0;
    this.stats.cnum = 0;

    this.dalist = [];
    this.darungs= [];
    this.draw_view();
}


viewer.prototype.check_match = function(mdex,ltype) {

    var s = "";
    var pobj = null;
    var ret = false;

    if (ltype == "webits") {
        s =  "amare.webitlist[" + mdex + "]";
    } else if (ltype == "people") {
        s =  "amare.peoplelist[" + mdex + "]";
    } else if (ltype == "unsaved") {
        s =  "amare.unsavedlist[" + mdex + "]";
    } 
    pobj = eval(s);
    if (pobj != null) {
        if (this.stats != null) {
            ret = true;
	    if (this.stats.listype == "unsaved") {
                 if (pobj.stored == true) { ret = false; } 
   	    } 
        }     
    }
   return ret;
}


viewer.prototype.update_tags = function(pobj) {
  var fnd_rung = -1;

  for (var c=0; c<=this.darungs.length;c++) {
         if (this.darungs[c] != undefined) {
            if (this.darungs[c].postman != undefined) {
              if (this.darungs[c].postman.webit_id == pobj.webit_id) {
                   fnd_rung = c;
              }
            }
         }
  }


  if (fnd_rung != -1) {
          if (this.darungs[fnd_rung].postman != undefined) {
            this.darungs[fnd_rung].postman.tags = pobj.tags;
            this.darungs[fnd_rung].postman.draw_tags();
          }
  }
 
}



viewer.prototype.update_one = function(tpid,mdex,ltype) {

  var fnd_rung = -1;
  for (var c=0; c<=this.darungs.length;c++) {
         if (this.darungs[c] != undefined) {
            if (this.darungs[c].postman != undefined) {
              if (this.darungs[c].postman.pid == tpid) {
                   fnd_rung = c;
              }
            }
         }
  }

 
  if (fnd_rung != -1) {

        // remove if no longer matches 
        if (this.check_match(mdex,ltype) == false) {
            this.del_rung(fnd_rung);
        } else {
          if (this.darungs[fnd_rung].postman != undefined) {
            this.darungs[fnd_rung].postman.set_ppid(mdex,ltype);
            this.darungs[fnd_rung].postman.shape= "";
            this.darungs[fnd_rung].postman.redraw_rung();
          }
        }
  }
 
}


viewer.prototype.update_person = function(pname) {
  var s= "";
  var fnd_rung = -1;
  for (var c=0; c<=this.darungs.length;c++) {
         if (this.darungs[c] != undefined) {
            if (this.darungs[c].postman != undefined) {
              if (this.darungs[c].postman.uname == pname) {
                   fnd_rung = c;
              }
            }
         }
  }
  if (fnd_rung != -1) {
        if (this.darungs[fnd_rung].postman != undefined) {
           this.darungs[fnd_rung].postman.set_ppid(tpid,ltype);
           this.darungs[fnd_rung].postman.redraw_rung();
        }
  } 
}




viewer.prototype.del_rung = function(tspot) {
     var da = this.darungs[tspot].vdex;
     this.dalist.splice(da,1);
     this.darungs.splice(tspot,1);
     this.load_rungs();
     this.zoom = false;
     this.draw_view();
}


viewer.prototype.del_webit = function(tpid) {
  var fnd_rung = -1;
  for (var c=0; c<=this.darungs.length;c++) {
         if (this.darungs[c] != undefined) {
            if (this.darungs[c].postman != undefined) {
              if (this.darungs[c].postman.pid == tpid) {
                   fnd_rung = c;
              }
            }
         }
  }
  if (fnd_rung != -1) {
     this.del_rung(fnd_rung);
  } else {
    var fnd_le = -1;
    for (var b=0; b<=this.webitlist.length;b++) {
         if (webitlist[this.webitlist[b]] != undefined) {
           if (webitlist[this.webitlist[b].pid] == tpid) {
                fnd_le = b;
           }
         }
    }
    if (fnd_le != -1) {
      this.dalist.splice(fnd_le,1);
    }
  }
}


viewer.prototype.del_person = function(puname) {

  var fnd_rung = -1;
  for (var c=0; c<=this.darungs.length;c++) {
         if (this.darungs[c] != undefined) {
            if (this.darungs[c].postman != undefined) {
              if (this.darungs[c].postman.uname == puname) {
                   fnd_rung = c;
              }
            } 
         }
  }
  if (fnd_rung != -1) {
     this.del_rung(fnd_rung);
  } else {
    var fnd_le = -1;
    for (var b=0; b<=this.dalist.length;b++) {
         if (peeplist[this.dalist[b]] != undefined) {
            if (peeplist[this.dalist[b].uname] == puname) {
                   fnd_le = b;
            }
         }
    }
    if (fnd_le != -1) {
      this.dalist.splice(fnd_le,1);
    }
  }
}



viewer.prototype.load_rungs = function(ldex) {

       this.darungs = [];
       var r = 0;
       if (ldex != undefined) {
        r = ldex;
       }
       this.listdex = r;

       var lgo = true;
       var c=0;
       var mdex=0;
       var ltype = "";

       while (lgo) {

         if (this.dalist[r] != undefined) {

           mdex = this.dalist[r].mdex;
	   ltype = this.dalist[r].ltype;
    	   this.darungs[c] = new Object();
           this.darungs[c].vdex = r;
         }

         r = r+1;
         if (r >= this.dalist.length) {
            r = 0;
         }
         c = c+1;	 
         if ((c >= this.top_end) || (c >=this.dalist.length))  {
           lgo=false;
         }
       }


}

 
viewer.prototype.redraw_rungs = function(trungdex) {
    var r = 0;
    var c = 0;
    var a = 0;
    var rd, lt = "";

    if (trungdex != undefined) {
       r = trungdex;
    }

    var darungs2 = [];

      for (c=r; c<this.darungs.length;c++) {
         if (this.darungs[c] != undefined) {
             darungs2[a] = new Object();
             rd = this.darungs[c].vdex;
	     if (this.dalist[rd] != undefined) {
	       lt = this.dalist[rd].ltype;

               if (lt == "webits") {
                 if (amare.webitlist[rd] != null) {
                   darungs2[a].vdex = rd;
                   a = a+1;
                 }
               }
               if (lt == "people") {
                 if (amare.peoplelist[rd] != null) {
                   darungs2[a].vdex = rd;
                   a = a+1;
                 }
               }
	       if (lt == "unsaved") {
                 if (amare.unsavedlist[rd] != null) {
                   darungs2[a].vdex = rd;
                   a = a+1;
                 }
               }
	       if (lt == "newbie") {
                 if (amare.newbielist[rd] != null) {
                   darungs2[a].vdex = rd;
                   a = a+1;
                 }
               }

	     } else {
//		     alert(rd);
	     }
         }
      }

      for (c=0; c<r;c++) {
         if (this.darungs[c] != undefined) {
             darungs2[a] = new Object();
             rd = this.darungs[c].vdex;

	     if (this.dalist[rd] != undefined) {
 	       lt = this.dalist[rd].ltype;

               if (lt == "webits") {
                 if (amare.webitlist[rd] != null) {
                   darungs2[a].vdex = rd;
                   a = a+1;
                 }
               }
               if (lt == "people") {
                 if (amare.peoplelist[rd] != null) {
                   darungs2[a].vdex = rd;
                   a = a+1;
                 }
               }
	       if (lt == "unsaved") {
                 if (amare.unsavedlist[rd] != null) {
                   darungs2[a].vdex = rd;
                   a = a+1;
                 }
               }
	       if (lt == "newbie") {
                 if (amare.newbielist[rd] != null) {
                   darungs2[a].vdex = rd;
                   a = a+1;
                 }
               }
	     }
         }  
      }

      this.darungs=[];
      for (var z=0; z<darungs2.length;z++) {
        if (darungs2[z] != undefined) {
           this.darungs[z] = new Object();
           var ad = darungs2[z].vdex;
           this.darungs[z].vdex = ad;
        }
      }

      this.draw_view();
} 



viewer.prototype.randomize_rungs = function() {

   var tls = [];
   var r = 0;
   var i =0;
   var mx = 0;
   var mdex = null;
   var ltype = "";

   this.darungs = [];
   var tmplist = this.dalist.slice(0);

   while (i<this.top_end) {
       mx = tmplist.length;
       r = Math.floor((Math.random()*mx));
       if (tmplist[r] != undefined) {
         mdex = tmplist[r].mdex;
         ltype = tmplist[r].ltype;
         tmplist.splice(r,1);
         this.darungs[i] = new Object();
         this.darungs[i].vdex = r;
      }
     i = i+1;
  }

    this.draw_view();

}


