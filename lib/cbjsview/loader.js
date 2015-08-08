
viewer.prototype.load_newbie_list = function() {

    var lgo = true;
    var d = 0;
    var mx = 0;
    var ro = null;
    var ok = false;
    var obj = null;
    this.stats = amare.total_newbies;
    var st = 0;
    this.dalist = [];
    mx = amare.newbielist.length;
      for (var r=d; r<mx;r++) {
        ro = amare.newbielist[r];
        if (ro != undefined) {
              obj = new listdex();
              obj.mdex = r;
	      obj.ltype = "newbie";
              this.dalist.push(obj);
              d = d+1 
        }
    } 
    this.load_rungs(st);
    this.draw_view();
}


viewer.prototype.load_webitlist = function(dtmon,pstart) {

    var lgo = true;
    var d = 0;
    var mx = 0;
    var ro = null;
    var search_match = true;
    var date_match = false;
    var obj = null;
    var dt = null;
 
    if (dtmon == undefined) {
       var bd = new Date();
       dt = new Object;
       dt.month = "all";
       dt.year = bd.getFullYear();
    } else {
       dt = dtmon;
    }

     if (dt.month == "all") {
       this.stats = amare.total_webits;
     } else {

      this.stats = amare.get_monthstat(dt);
        if (this.stats != null) {
      //    alert("month="+this.stats.month);
         //alert(this.stats.listype);
       }
     }

     var st = 0;
     if (pstart != undefined) {
	  st = pstart;
     }

     this.dalist = [];

     mx = amare.webitlist.length;
      for (var r=d; r<mx;r++) {
        ro = amare.webitlist[r];
        if (ro != undefined) {
            search_match = true;

         if (this.sterms != "") {
             search_match = false;
             regex = "/"+this.sterms+"/i";
              if (ro.story != null) {
                if (ro.story.search(new RegExp(this.sterms,"i")) > -1)  {
                  search_match = true;
                }
              }
              if (ro.uname != null) {
                if (ro.uname.search(new RegExp(this.sterms,"i")) > -1)  {
                  search_match = true;
                }
              }
         }

	    if (dt.month == "all") {
		date_match = true;
	    } else {
	//	    alert("m=" + dt.month + " y=" + dt.year);
		if (check_month(ro,dt) == true) {
			date_match = true;
		}
	    }

	    if ((search_match == true) && (date_match == true)) {
              obj = new listdex();
              obj.mdex = r;
	      obj.ltype = "webits";
              this.dalist.push(obj);
              d = d+1 
	    }
        }
    } 
    this.load_rungs(st);
    this.draw_view();
}



viewer.prototype.load_group_list = function(tgroupid,pstart) {

   if (tgroupid != undefined) {
       this.groupid = tgroupid;
   }
   var st = 0;
   if (pstart != undefined) {
	  st = pstart;
   }


   if (this.groupid == "") {
     this.stats = amare.total_people;
   } else {
     this.stats  = amare.get_groupstat(this.groupid);
   }

   this.dalist = [];
   var lgo = true;
   var d = 0;
      for (var r=d; r<amare.peoplelist.length;r++) {
        if (amare.peoplelist[r] != undefined) {
           var ok = false;
           if (amare.peoplelist[r].groupid == this.groupid )  {
               ok = true;
           }
           if (ok == true) {
 	     this.dalist[d] = new Object();
             this.dalist[d].mdex = r;
	     this.dalist[d].ltype = "people";
             d = d+1 
           }
        } 
      }
   this.load_rungs(st);
   this.draw_view();
}


viewer.prototype.load_person_list = function(tuname) {
    
    this.stats = null;

    this.dalist = [];
    var lgo = true;
    var d = 0;
      for (var r=d; r<amare.webitlist.length;r++) {

        if (amare.webitlist[r] != undefined) {
           var ok = false;
           if (amare.webitlist[r].uname == tuname) {
             ok = true;
           }
           if (ok == true) {
	     this.dalist[d] = new Object();
	     this.dalist[d].mdex = r;
	     this.dalist[d].ltype = "webits";
             d = d+1;
           }
        } 
    }
    this.load_rungs(0);
    this.draw_view();
}


viewer.prototype.load_unsaved_list = function() {

    var lgo = true;
    var d = 0;
    var mx = 0;
    var ro = null;
    var ok = false;

     this.stats = amare.total_unsaved;
     this.dalist = [];

     mx = amare.unsavedlist.length;

     for (var r=d; r<mx;r++) {
        ro = amare.unsavedlist[r];
        if (ro != undefined) {
          ok = false;
	  this.dalist[d] = new Object();
          this.dalist[d].mdex = r;
	  this.dalist[d].ltype = "unsaved";
          d = d+1 
        }
     } 

    this.load_rungs(0,"unsaved");
    this.draw_view();
}


viewer.prototype.load_random_list = function() {

   var ro = null;
   this.darungs = [];

   this.stats = amare.total_webits;

   this.dalist = [];
    
   var tls = [];
   var r = 0;
   var i =0;
   var j =0;
   var obj = null;

   var clone = amare.webitlist.slice(0);
   var mx = clone.length;
   var tls = [];
  
   while (i<daviewer.top_end) {
       mx = clone.length;
       r = Math.floor((Math.random()*mx)+1);
       ro = clone[r];
       if (ro != undefined) {
            tls.push(r);
	    obj = new listdex();
            obj.mdex = r;
	    obj.ltype = "webits";
            this.dalist.push(obj);
            i = i+1;
       }
       clone.splice(r,1);
   }
	     
   this.load_rungs(0,"webits");
   this.draw_view();
}


viewer.prototype.load_search_list = function(pterms) {

   this.sterms = "";
   if (pterms != undefined) {
     this.sterms = pterms;
   }

    this.stats = amare.total_sorted;

    this.dalist = [];
    var lgo = true;
    var d = 0;
    var r = 0;
    var regex = "";

      for (r=0; r<amare.webitlist.length;r++) {
        if (amare.webitlist[r] != undefined) {
         var ok = false;
         if (this.sterms != "") {
           ok = false;
           if (amare.webitlist[r] != undefined) {
             regex = "/"+this.sterms+"/i";
              if (amare.webitlist[r].story != null) {
                if (amare.webitlist[r].story.search(new RegExp(this.sterms,"i")) > -1)  {
                  ok = true;
                }
              }
              if (amare.webitlist[r].uname != null) {
                if (amare.webitlist[r].uname.search(new RegExp(this.sterms,"i")) > -1)  {
                  ok = true;
                }
              }
           }
         }
         if (ok == true) {
	   this.dalist[d] = new Object();
           this.dalist[d].mdex = r;
	   this.dalist[d].ltype = "webits";
           d = d+1 
         }
      }  
    }

       for  (r=0; r<amare.unsavedlist.length;r++) {
        if (amare.unsavedlist[r] != undefined) {
         var ok = false;
         if (this.sterms != "") {
            regex = "/"+this.sterms+"/i";
           ok = false;
           if (amare.unsavedlist[r] != undefined) {
              if (amare.unsavedlist[r].story != null) {
                if (amare.unsavedlist[r].story.search(new RegExp(this.sterms,"i")) > -1)  {
                  ok = true;
                }
              }
              if (amare.unsavedlist[r].uname != null) {
                if (amare.unsavedlist[r].uname.search(new RegExp(this.sterms,"i")) > -1)  {
                  ok = true;
                }
              }
           }
         }
         if (ok == true) {
	   this.dalist[d] = new Object();
           this.dalist[d].mdex = r;
	   this.dalist[d].ltype = "unsaved";
           d = d+1 
         }
       }
     }
   

  this.load_rungs(0);
  this.draw_view();
}



