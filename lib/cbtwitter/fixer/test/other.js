
  function twget_atom()
  {


    var results = "";
    var theQuery = "standing desk";
 
    $.post("tws_atom.php", {query: theQuery},  function(atom_resp){ 


       $('entry',atom_resp).each(function(i) {


          var text = $(this).find("title").text();
          var author = $(this).find("author").text();
          var id_str = $(this).find("id_str").text();
          var created_at = $(this).find("created_at").text();

          results = results + "<br>";

          results = results + id_str + "<br>";
          results = results + created_at + "<br>";
          results = results + author + "<br>";
          results = results + text + "<br>";


          results = results + "<br>";



         });

       $("#container").html(results);
   
      });

  }



 
  function twget_json()
  {


    var op = "";
    var theQuery = "standing desk";
 
    $.post("tws_json.php", {query: theQuery},  function(json_resp)  { 



         op = json_resp;


       $("#container").html(op);
   
      });

  }
other.js