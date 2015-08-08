


function search_provider() {

  this.init();

}



search_provider.prototype.init = function () {



}


search_provider.prototype.requestSuggestions = function (osuggester) {

  if (osuggester != null) {
  var tbvalue = osuggester.seed ;

  if (tbvalue.length > 0) {
     osuggester.boss.sterms = tbvalue;
     toper.daviewer.get_search_list(tbvalue);
   }
 }

};


