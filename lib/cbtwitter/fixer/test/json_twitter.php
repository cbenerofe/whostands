

<html>
<head>
<script type="text/javascript">

function twitterSearch(obj) {


    var tDiv = document.getElementById("twitter");

    var user, bgcolor, tweet, postedAt, icon, userURL;


    tDiv.innerHTML = "<ul>";

    for (i=0;i<obj.results.length;i++) {
    	//Look at me use the JavaScript modulus operator to do even/odd rows.
      	if(i % 2) {
        	bgcolor="#efefef"
        } else {
       		bgcolor="#ddd"
        }

        //we need to get some data out of the object
        //and populate some variables.
        //i could do this inline in the string below, 
        //but this is way easier for you to read

        icon = obj.results[i].profile_image_url;
        user = obj.results[i].from_user;
        userURL = "http://twitter.com/"+user;
        tweet = obj.results[i].text;
        postedAt = obj.results[i].created_at;

   	//	tDiv.innerHTML +="<li style='background-color:"+bgcolor+"; background-image: url("+icon+")'><strong><a href='"+userURL+"'>"+user+"</a></strong>: "+tweet+" <span class='time'>("+postedAt+" GMT)</span> </li>";

   		tDiv.innerHTML +="<li ><strong><a href='"+userURL+"'>"+user+"</a></strong>: "+tweet+" <span class='time'>("+postedAt+" GMT)</span> </li>";

	}


    tDiv.innerHTML += "</ul>";
}





function twitter() {
    var twitterJSON = document.createElement("script");
    twitterJSON.type="text/javascript"
    
    twitterJSON.src="http://search.twitter.com/search.json?callback=twitterSearch&q=standing%20desk&rpp=100"
    document.getElementsByTagName("head")[0].appendChild(twitterJSON);
    return false;
}


</script>


<body>

<input type=button value='try' onClick='twitter();' >

<br> 

<div id="twitter"><b>data goes here</b></div>

</body>
</html> 