
function group_provider() {

  this.sealist=[];
  this.init();

}



group_provider.prototype.init = function () {

     this.sealist.push({'text':'ungrouped' ,'groupid':''   });
     this.sealist.push({'text':'desk standers' ,'groupid':'stands'   });
     this.sealist.push({'text':'desk dancers' ,'groupid':'dances'  });
     this.sealist.push({'text':'desk workouters' ,'groupid':'workout'  });
     this.sealist.push({'text':'curious' ,'groupid':'curious'  });
     this.sealist.push({'text':'standing desk wanters' ,'groupid':'wants'  });
     this.sealist.push({'text':'standing desk tryers' ,'groupid':'newbie'  });
     this.sealist.push({'text':'made their own' ,'groupid':'diy'  });
     this.sealist.push({'text':'manufacturer' ,'groupid':'makes'  });
     this.sealist.push({'text':'marketer' ,'groupid':'markets'  });
     this.sealist.push({'text':'sharer' ,'groupid':'shares'  });
     this.sealist.push({'text':'likers' ,'groupid':'likes'  });
     this.sealist.push({'text':'haters' ,'groupid':'anti'   });
     this.sealist.push({'text':'to be deleted' ,'groupid':'junk'  });

}


group_provider.prototype.get_setlist = function () {

  var retlist = [];
   for (var i=0; i < this.sealist.length; i++ ) {
           retlist.push(this.sealist[i]);
   }
   return retlist;
}

group_provider.prototype.requestSuggestions = function (osuggester,btype_ahead) {

  var asuggestions = [];
  var tbvalue = "";
  if (osuggester != null) {

   var found=false;
   for (var i=0; i < this.sealist.length; i++ ) {
       asuggestions.push(this.sealist[i]);
       found=true;
   }
   osuggester.autosuggest(asuggestions);
  }
}


group_provider.prototype.get_desc = function (tgroupid) {
   var ret="";
   var found = false;
   for (var i=0; i < this.sealist.length; i++ ) {
     if (this.sealist[i].groupid == tgroupid){
           ret = this.sealist[i].text;
          found = true;
     }
   }
  if (found == false) {
     ret = tgroupid;
  }
  if (ret == "") { ret = "ungrouped"; }
  return ret;
}
