

function listdex () {
    this.mdex = "";
    this.ltype = "";
}


function webit(tpid) { 

   this.pid = "";
   if (tpid != undefined) {
      this.pid = tpid;
   } else {
      this.pid = randomID(6);
   }

   this.webit_id = "";
   this.uuid = "";
   this.listype = "";
   this.source = "";
   this.stored = false;

   this.created_at = "";
   this.change_date = "";

   this.uname = "";
   this.groupid = "";
   this.picurl = "";
   this.story = "";

   this.picurl = "";
   this.linkurl ="";
   this.embedurl ="";

   this.tags = [];

}


function getRandomNumber(range)
{
	return Math.floor(Math.random() * range);
}

function getRandomChar()
{
	var chars = "0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
	return chars.substr( getRandomNumber(62), 1 );
}

function randomID(size)
{
	var str = "";
	for(var i = 0; i < size; i++)
	{
		str += getRandomChar();
	}
	return str;
}

 
check_month = function(pobj,dtmon) {

    var month = "";
    var year = "";
    var arr = null;
    ret = false;

    if (pobj != null) {

    if ((pobj.created_at != "")  && (pobj.created_at != undefined)) { 
        arr =  pobj.created_at.split(" ");
        var b =  arr[0];
        var c = b.split("-");
        month = c[1]-1;
        year =  c[0];
    }

    if ((dtmon.month == month) && (dtmon.year == year)) {
	    ret = true;
    }
    }

   return ret; 

}

