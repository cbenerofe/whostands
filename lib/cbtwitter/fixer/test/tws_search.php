
<html>
<head>

<script src="../jquery-code.js" type="text/javascript" >
</script>

<script type="text/javascript">


function tw_check_resp(xmlrsp) {

  var tmpstr = "";
 

  if (xmlrsp != null) {
    
      tmpstr = xmlrsp.responseText;

  } 

  
       if (document.getElementById('results') != null) {
          document.getElementById('results').innerHTML=tmpstr; 
       }
 

}  


function tw_check() {


  	  xmlhttp=new XMLHttpRequest();
	  
	  xmlhttp.onreadystatechange=function()
	    {
	    if (xmlhttp.readyState==4)
	      {
                
                 tw_check_resp(xmlhttp);
 	      }
	    }

	  xmlhttp.open("GET","http://www.mydeskmod.com/tweetfm/tws_jsonp.php",true);

	  xmlhttp.send();  

}




</script>
</head>

<body>

<input type=button value='try' onClick='tw_check();' >

<br> 

<div id="results"><b>results</b></div>

</body>
</html> 
