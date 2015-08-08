


function product_provider() {
  this.sealist=[];
  this.init();
}


product_provider.prototype.init = function () {
 
     this.sealist.push({'text':'tall desks & tall chairs' ,'product_type':'tall' });
     this.sealist.push({'text':'adjustable height desks' , 'product_type':'adjustable' });
     this.sealist.push({'text':'hutches and lecturns' , 'product_type':'hutch' });
//     this.sealist.push({'text':'do it yourself solutions' , 'product_type':'diy'});
     this.sealist.push({'text':'custom desk installation' , 'product_type':'custom'});
//     this.sealist.push({'text':'footpads and mousepads' , 'product_type':'pads' });
//     this.sealist.push({'text':'standing desk accesories', 'product_type':'accesories' });
     this.sealist.push({'text':'personal training for desks' , 'product_type':'workout' });

}


product_provider.prototype.get_setlist = function () {

  var retlist = [];
   for (var i=0; i < this.sealist.length; i++ ) {
           retlist.push(this.sealist[i]);
   }
   return retlist;
}

product_provider.prototype.get_desc = function (prodt) {
  var ret="";
   for (var i=0; i < this.sealist.length; i++ ) {
     if (this.sealist[i].product_type == prodt){
           ret = this.sealist[i].text;
     }
   }
  return ret;
}
