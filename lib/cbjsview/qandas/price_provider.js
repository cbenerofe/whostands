

function price_provider() {
   this.sealist=[];
   this.init();
}


price_provider.prototype.init = function () {
 
    this.sealist.push({'text':'no limit','pmax':0});
    this.sealist.push({'text':'< $1500','pmax':1500});
    this.sealist.push({'text':'< $500','pmax':500});
    this.sealist.push({'text':'< $25','pmax':25});
}


price_provider.prototype.requestSuggestions = function (osuggester,btype_ahead) {

  var asuggestions = [];
  if (osuggester != null) {
   for (var i=0; i < this.sealist.length; i++ ) {
       asuggestions.push(this.sealist[i]);
   }
   osuggester.autosuggest(asuggestions);
  }
}
