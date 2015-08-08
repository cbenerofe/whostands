

poster.prototype.draw_debug = function() {
     var tmpstr="";
     var pobj=null;
     var lbl = "";
     var s = "";
     var es = "";
  

      tmpstr=tmpstr +  " rng=" + this.rung;
      tmpstr=tmpstr +  " mdex="+this.dadex;
      tmpstr=tmpstr +  " wid="+this.webit_id;
      tmpstr=tmpstr +  " ltype="+this.listype;
      tmpstr=tmpstr +  " source="+this.source;
      tmpstr=tmpstr +  " stored="+this.stored;
      tmpstr=tmpstr +  "<br>";
      tmpstr=tmpstr +  " uname="+this.uname;
      tmpstr=tmpstr +  " tags="+this.tags;

      tmpstr=tmpstr +  " uuid=[" +this.pid + "]";

      if (this.listype == "people") {
        tmpstr=tmpstr +  " group="+this.groupid;
      }

      tmpstr=tmpstr +  " shape="+this.shape;
      tmpstr=tmpstr +  " changed="+this.changed;
      /*
       tmpstr=tmpstr +  " story_chg="+this.story_changed;
       tmpstr=tmpstr +  " pic_chg="+this.pic_changed;
       tmpstr=tmpstr +  " link_chg="+this.link_changed;
       tmpstr=tmpstr +  " embed_chg="+this.embed_changed;
       tmpstr=tmpstr +  " cat_chg="+this.cat_changed;
       tmpstr=tmpstr +  " group_chg="+this.group_changed;
       */
  //    tmpstr=tmpstr +  " picurl="+this.picurl;

   lbl = this.rungster + '_debug_spot';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmpstr;
     }
}



