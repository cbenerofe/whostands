<html>
<head>
    <title></title>
</head>
<body>
    <script src="../lib/jquery-code.js"></script>
    <script src="../lib/jquery.jtwitter.min.js"></script> 


<div id='profile' >



<div id='avatar' >
</div>


</div>




    <script>


// I am query data for "jQueryHowto" user

$.jTwitter('', function(posts){ 

  alert(posts[0].user.screen_name);

  //Callback functn with the user data
  $('#profile input.url').val(posts[0].user.url);

  $('#profile #avatar').html('<img src="'
       + posts[0].user.profile_image_url + '" />');
});




    </script>



</body>
</html>