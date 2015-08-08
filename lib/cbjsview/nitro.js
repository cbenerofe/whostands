

viewer.prototype.nitro_start = function(pway) {

       var tsrc='images/stop.png';
      $('#nitro_btn').attr('src',tsrc);
     $('#nitro_btn').trigger("create");


	if (pway != undefined) {
	    this.metro_dir = pway;
	}


    if (is_mobile == true) {
       this.metro_spd = 750;
    } else {
       this.metro_spd =500;
    }
    this.flip_card();    

}


viewer.prototype.nitro_stop = function() {

   this.metro_spd = 0;
   this.flip_card();

         var tsrc='images/dot_swirl.png';
      $('#nitro_btn').attr('src',tsrc);
//     $('#nitro_btn').buttonMarkup({icon:""});
     $('#nitro_btn').trigger("create");



}


viewer.prototype.toggle_nitro = function() {

    if (this.metro_spd == 0 ) {
      this.nitro_start();
    } else {
      this.nitro_stop();
    }
}


viewer.prototype.flip_card = function() {
 
   if (this.metro_spd != 0) {

	   if (this.metro_dir == "fwd") {
             this.next(5);
	   } 
	   if (this.metro_dir == "back") {
             this.prev(5);
	   }
  
         var cl = this.varname + ".flip_card();";
         this.metro_tmr = setTimeout(cl,this.metro_spd);

    }

}


