

function preset_provider() {
  this.sealist=[];
  this.init();
}


preset_provider.prototype.init = function () {
 
     this.sealist.push({'text':'standing desks need tall chairs',  'preset':'talldesk','sketch':'bd8e4e9e04ffff886817581d760cf46c'});
     this.sealist.push({'text':'hutches make standing work areas on top of sitting desks', 'preset':'hutch', 'sketch':'606adf01ebf2d1ec6817581d760cf46c'});
     this.sealist.push({'text':'furniture installers create custom mounted standing workareas' , 'preset':'mounted' ,'sketch':'8ba142c33b5ccd43749b941927ab6c4'});
     this.sealist.push({'text':'concrete blocks can be used to raise a desk to standing height' ,'preset':'blocks', 'sketch':'54984584b8be7a696817581d760cf46c'});
     this.sealist.push({'text':'filling cabinets are used as standing desks' ,'preset':'worktop','sketch':'aa43a2624012ab9d6817581d760cf46c'});
/*
     this.sealist.push({'text':'shelves as a standing workspace', 'preset':'shelves' , 'sketch':'b218d6360d3c9c733749b941927ab6c4' });
*/
     this.sealist.push({'text':'sit only workspace is not good for the body' , 'preset':'sitonly','sketch':'47c93cc4b323d5596817581d760cf46c'});
     this.sealist.push({'text':'adjustable height desk are available', 'preset':'adjustable', 'sketch':'abe71d5f456fc8f73749b941927ab6c4'});
//     this.sealist.push({'text':'adjustable height desk with two legs', 'preset':'adjustable2l', 'sketch':'df9262dfe1eec9ac3749b941927ab6c4'});
//     this.sealist.push({'text':'adjustable height desk with three legs', 'preset':'adjustable3l', 'sketch':'7cd3abff590992e96817581d760cf46c'});

}


preset_provider.prototype.requestSuggestions = function (osuggester) {
  var asuggestions = [];
  if (osuggester != null) {
     for (var i=0; i < this.sealist.length; i++ ) {
        asuggestions.push(this.sealist[i]);
     }
  } else {
      asuggestions = this.sealist;
  }
  osuggester.autosuggest(asuggestions);
}


preset_provider.prototype.get_preset = function (tpreset) {
   var ret = null;
 
   if (tpreset == undefined) {
      ret = this.sealist[3];
   } else { 

     for (var i=0; i<this.sealist.length;i++) {
          if (this.sealist[i].preset == tpreset) {
              ret = this.sealist[i];
          }
     }
   }
   return ret;
}


preset_provider.prototype.next_preset = function (tpreset) {
   var rdex= 0;
   var ret = null;
 
   if (tpreset != undefined) {

     for (var i=0; i<this.sealist.length;i++) {
          if (this.sealist[i].preset == tpreset) {
              rdex = i;
          }
     }
   }

   rdex = rdex + 1;
   if (rdex >= this.sealist.length) {
	   rdex = 0;
   }
     ret = this.sealist[rdex].preset;

   return ret;
}


preset_provider.prototype.preset_pic = function (tpreset,twidth) {

    var wd = "50px";
    if (twidth != undefined) {
       wd = twidth;
    }
    var o = this.get_preset(tpreset);
    var tmp = "";
    var src = "deskfm/images/vman/";
    src =src + o.preset; 
    src = src + ".jpg";
    tmp = "<img src='"+src+"' width='"+wd+"' >";

    return tmp;

}


preset_provider.prototype.preset_link = function (tpreset) {
     var tmp = "";
     var o = null;
     o = this.get_preset(tpreset);
     var src="";
     if (o != null) {
       src =o.sketch; 
       tmp = tmp + "http://sketchup.google.com/3dwarehouse/mini?mid=";
       tmp = tmp + src;
     }

     return tmp;
}


preset_provider.prototype.preset_embed = function (tpreset,tzm) {
     var tmp = "";
     var o = null;
     o = this.get_preset(tpreset);
     var src="";
     if (o != null) {
       src =o.sketch; 
       tmp = tmp + "http://sketchup.google.com/3dwarehouse/mini?mid=";
       tmp = tmp + src;
       tmp = tmp + "&etyp=sw";
       if (tzm == false) {
         tmp = tmp + "&width=250&height=200'";
       } else {
         tmp = tmp + "&width=500&height=300'";
       }
     }
     return tmp;
}


preset_provider.prototype.preset_story = function (tpreset) {

    var o = this.get_preset(tpreset);
    var tmp = o.text;

    return tmp;

}

