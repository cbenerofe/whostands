
function subcat_provider() {

  this.sealist=[];
  this.init();

}


subcat_provider.prototype.init = function () {

     this.sealist.push({'text':'who stands at their desk ?', 'cat':'who','subcat':'stands' });
     this.sealist.push({'text':'who dances at their desk ?', 'cat':'who','subcat':'dances' });
//     this.sealist.push({'text':'who sits all day at their desk ?', 'cat':'who','subcat':'sitter' });
     this.sealist.push({'text':'who wants a standing desk ?', 'cat':'who','subcat':'wants' });
     this.sealist.push({'text':'who is trying it out ?', 'cat':'who','subcat':'newbie' });
     this.sealist.push({'text':'who likes standing desks ?', 'cat':'who','subcat':'likes' });
     this.sealist.push({'text':'who shares about standing ?', 'cat':'who','subcat':'shares' });
     this.sealist.push({'text':'who is curious about it ?', 'cat':'who','subcat':'curious' });
     this.sealist.push({'text':'who is anti standing ?','cat':'who','subcat':'anti' });

     this.sealist.push({'text':'what is a standing desk ?', 'cat':'what','subcat':'standesk' });
     this.sealist.push({'text':'what is a hutch ?', 'cat':'what','subcat':'hutch' });
     this.sealist.push({'text':'what is an adjustable ?', 'cat':'what','subcat':'adjustable' });
     this.sealist.push({'text':'what about chairs ?', 'cat':'what','subcat':'chair' });
     this.sealist.push({'text':'what about feet pain ?', 'cat':'what','subcat':'footpad' });

     this.sealist.push({'text':'why get a standing desk ?', 'cat':'why','subcat':'because' });
     this.sealist.push({'text':'why is to much sitting bad ?', 'cat':'why','subcat':'sitonly' });
     this.sealist.push({'text':'why is more standing healthy ?', 'cat':'why','subcat':'health' });
     this.sealist.push({'text':'why do we have back pain ?', 'cat':'why','subcat':'back' });
     this.sealist.push({'text':'why not burn calories ?', 'cat':'why','subcat':'weight' });
     this.sealist.push({'text':'why is it productive ?', 'cat':'why','subcat':'productivity' });
     this.sealist.push({'text':'why not stand up ?' ,'cat':'why','subcat':'anti' });

     this.sealist.push({'text':'how to standup desk ?', 'cat':'how','subcat':'howto' });
     this.sealist.push({'text':'how difficult is standing ?', 'cat':'how','subcat':'difficult' });
     this.sealist.push({'text':'how to make a standing desk ?' , 'cat':'how','subcat':'diy' });
//     this.sealist.push({'text':'how do you get a standing desk ?' , 'cat':'how','subcat':'get' });
     this.sealist.push({'text':'how tall are standing desks ?', 'cat':'how','subcat':'tall' });
     this.sealist.push({'text':'how to workout and work ?' , 'cat':'how','subcat':'workout' });
 //    this.sealist.push({'text':'how to compare standing desks ?', 'cat':'how','subcat':'compare' });
 
}


subcat_provider.prototype.get_setlist = function (pcat) {

  var retlist = [];
  var tcat = "";
  if ( pcat != undefined) {
    tcat = pcat;
  }
   for (var i=0; i < this.sealist.length; i++ ) {
     if ((this.sealist[i].cat == tcat) || (tcat == "")) {
           retlist.push(this.sealist[i]);
     }
   }
   return retlist;
}


subcat_provider.prototype.get_desc = function (tcat,tsubcat) {
  var ret="";
   for (var i=0; i < this.sealist.length; i++ ) {
     if ((this.sealist[i].cat == tcat)&& (this.sealist[i].subcat == tsubcat)){
           ret = this.sealist[i].text;
     }
   }
  if (ret == "") {
     ret = tcat + "-" + tsubcat;
   }
  return ret;
}


subcat_provider.prototype.requestSuggestions = function (osuggester) {

  var asuggestions = [];
  var tbvalue = "";
  if (osuggester != null) {
    if (osuggester.textbox != null) {
        tbvalue = osuggester.textbox.value;
    } else {
       tbvalue = osuggester.textval;
    }
    if (tbvalue != undefined) {
//      if (tbvalue.length > 0) {
        var found=false;
        for (var i=0; i < this.sealist.length; i++ ) {
          if (this.sealist[i].cat == tbvalue) {
            asuggestions.push(this.sealist[i]);
            found=true;
          }
        }
        osuggester.autosuggest(asuggestions);
//      }
    }
  }
}
