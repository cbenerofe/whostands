
 poster.prototype.draw_tags = function() {

    var tmp="";
    var lbl = "";
    var pobj=null;

      for (var i=0; i<this.tags.length; i++) {

	tmp += '<a href="#popupDialog" data-rel="popup" data-position-to="window" data-transition="pop" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-icon-delete ui-btn-icon-left ui-btn-b">' + this.tags[i] + '</a>';

	tmp += '<div data-role="popup" id="popupDialog" data-overlay-theme="b" data-theme="b" data-dismissible="false" style="max-width:400px;">';
	tmp += ' <div data-role="header" data-theme="a">';
	tmp += '    <h1>Delete Tag?</h1>';
	tmp += '    </div>';
	tmp += '    <div role="main" class="ui-content">';
	tmp += '	<h3 class="ui-title">Are you sure you want to delete this Tag?</h3>';
	tmp += '    <a href="#" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b" data-rel="back">Cancel</a>';
        var id =  this.rungster + '_deltag_' + i;
	tmp += '    <a href="#" id="'+ id + '" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b" data-rel="back" data-transition="flow">Delete</a>';
	tmp += '    </div>';
	tmp += '</div>';
      }

	lbl = this.rungster + '_taglist';
        pobj = document.getElementById(lbl);
        if ( pobj != null) {
          pobj.innerHTML = tmp;
          $('#'+lbl).trigger("create");

          $this = this;
          for (var i=0; i<this.tags.length; i++) {
             var id =  this.rungster + '_deltag_' + i;
             var val = this.tags[i];
	     $('#'+id).click(function(event) {
                $.post('cbdbase/del_tag.php', { tag: val, webit_id: $this.webit_id  }, function(data) {
	            amare.update_webitags($this.webit_id, data);
 	        });
             });
	  }
        }
}


 poster.prototype.get_tags = function() {

     var tmp="";
     var lbl = "";
     var ocl = "";
     var sugs = [];
     var pobj = null;
     tmp = "";

	tmp += "<div id='" + this.rungster + "_taglist' >";
	tmp += "</div>";

	tmp += "<div class='formbox'>";
	tmp += "<form name='addTags' method='post'>";
	tmp += "<input type='text' id='" + this.rungster + "_newtags' value='' name='newtags' maxlength='40' />";
	tmp += "   </form>";
	tmp += "<button id='" + this.rungster + "_AddTagBtn' value='Add' >Add Tags</button>";
	tmp += "</div>";

     lbl = this.rungster + '_tag_spot';
    pobj = document.getElementById(lbl);
     if ( pobj != null) {
        pobj.innerHTML = tmp;
        $('#'+lbl).trigger("create");
        $this = this;

        $('#'+this.rungster+'_AddTagBtn').click(function(event) {

           $.post('cbdbase/add_tag.php', { tags: $('#'+$this.rungster+'_newtags').val(), webit_id: $this.webit_id, test: 'test' }, function(data) {
 	      amare.update_webitags($this.webit_id, data);
              $('#'+$this.rungster+'_newtags').val("");
 	   });
        });
     }

 
    $this = this;
    $.get('cbdbase/get_tags.php', { webit_id: $this.webit_id }, function(data) {
	    amare.update_webitags($this.webit_id, data);
       }
   );


 }


poster.prototype.toggle_gettags = function() {

    if (this.shape != "gettags") {
       this.shape = "gettags";
    } else {
       this.shape = "";
    }
    this.redraw_rung();
}



poster.prototype.hide_tags = function() {
     var tmpstr="";
     var pobj=null;
     var lbl = "";
     lbl = this.spotid;
     lbl = lbl +'_'+this.rung;
     lbl = lbl + '_tag_spot';
     pobj = document.getElementById(lbl);
     if ( pobj != null) {
          pobj.innerHTML = tmpstr;
     }
}


