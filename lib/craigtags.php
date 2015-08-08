<?php


class craigtag {

        var $_db_user = "changeme";
        var $_db_pass = "changeme";
        var $_db_host = "localhost";
        var $_db_name = "freetag";
	var $_con;

        function craigtag ($dbhost, $dbuser, $dbpass, $dbname) {

	   $this->_db_host = $dbhost;
	   $this->_db_user = $dbuser;
	   $this->_db_pass = $dbpass;
	   $this->_db_name = $dbname;

	   $this->_con = new mysqli("$this->_db_host", "$this->_db_user", "$this->_db_pass", "$this->_db_name");
	   if (!$this->_con) {
	     echo('Could not connect: ' . $this->_con->connect_error);
	   }

        }
 

	/**
	 * get_object_tags
	 * method to get tags on webit_id
	 * @param in, id of object.
	 * @return array Returns an array of the raw "tags" on the object.
	 */ 
	
	function get_object_tags($webit_id) {

	   $sql = " SELECT w.webit_id, w.story, t.tag FROM dfm_webits w, dfm_webit_tags wt, dfm_tags t ";
	   $sql = $sql . " where w.webit_id = wt.webit_id and wt.tag_id = t.tag_id ";
	   $sql = $sql . " and w.webit_id = " . $webit_id ;

	   $taglist = array();

  	   $result = $this->_con->query($sql);
           if ($result) {
	     while($row = $result->fetch_row()) {
	        $taglist[] = $row[2];
	     }
	   }

           return $taglist;

        }

	/**
	 * addget_tagid
	 * method to add tag to tag table, 
         * or get id of it, if already there 
	 * @param in, string of tag.
	 * @return int id of newly added or existing row for the tag.
	 */ 
	
	function addget_tagid($tag) {

           $tag_id = 0;

	   $sql = " SELECT tag_id FROM dfm_tags ";
	   $sql = $sql . " where tag = '" . $tag . "'";

 	   $result = $this->_con->query($sql);
           if (!$result) {
             error_log($this->_con->error);
           } else {
	     $row = $result->fetch_row();
        
	     if ($row != false) {
	       $tag_id = $row[0];
	     } else {
	       $sql = " insert into dfm_tags (tag) values ('" . $tag . "') ";
		 if ($this->_con->query($sql) == TRUE) {
		    $tag_id = $this->_con->insert_id;
		 } else {
		    echo "Error: " . $sql . "<br>" . $this->_con->error;
	       }
	     }
           }
           return $tag_id;
        }


	/**
	 * tag_object
	 * method to add tag to webit_tags table (if not already there), 
	 * @param in, id of tag and id of webit
	 * @return true or false.
	 */ 
	
	function tag_object($webit_id, $tag_id) {

	     $sql = " insert into dfm_webit_tags (webit_id, tag_id) values ($webit_id, $tag_id) ";
	     $result = $this->_con->query($sql);
             error_log($sql);
	     if ($result == false) {
                error_log("insert error" . $this->_con->error);
	     } 

	     $sql = " select count(*) from dfm_webit_tags 
		      where webit_id = $webit_id and tag_id = $tag_id) ";
	     
	     $ret = false;
             $results = $this->_con->query($sql);
 	     if ($result == false) {
               error_log("query error");
	     } else {
               if ($result->row['count'] == 1) {
                 $ret = true;
	       }
	     }
	     return $ret;
        }


	/**
	 * untag_object
	 * method to remove tag from webit_tags table , 
	 * @param in, id of tag and id of webit
	 * @return true or false.
	 */ 
	
	function untag_object($webit_id, $tag_id) {

	     $sql = " delete from dfm_webit_tags where webit_id = $webit_id and tag_id = $tag_id ";
	     $result = $this->_con->query($sql);
      	     $ret = true;
       	     if ($result == false) {
                error_log($sql);
	        error_log("delete error" . $this->_con->error);
	 	$ret = false;
	     } 

	     return $ret;
        }


	/**
	 * parse_tags
	 * method to parse tags out of a string and into an array.
	 * @param string String to parse.
	 * @return array Returns an array of the raw "tags" parsed according to the freetag settings.
	 */ 

	function parse_tags($tag_string) {

		$newwords = array();
		if ($tag_string == '') {
			// If the tag string is empty, return the empty set.
			return $newwords;
		}
		# Perform tag parsing		
		$query = trim($tag_string);

		$words = preg_split('/(")/', $query,-1,PREG_SPLIT_NO_EMPTY|PREG_SPLIT_DELIM_CAPTURE);
		$delim = 0;
		foreach ($words as $key => $word)
		{

			if ($word == '"') {
				$delim++;
				continue;
			}
			if (($delim % 2 == 1) && $words[$key - 1] == '"') {
				$newwords[] = $word;
			} else {
				$newwords = array_merge($newwords, preg_split('/\s+/', $word, -1, PREG_SPLIT_NO_EMPTY));
			}
		}

		return $newwords;
	}


  } // end craigtag

?>
