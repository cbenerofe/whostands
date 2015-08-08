<?php


 class foo { 
 
   public $webit_id; 
   public $pid; 
   public $uname;
   public $story;
   public $source;
   public $stored = true;
   public $listype;
   public $created_at = "";
   public $change_date = "";
   public $picurl;
   public $linkurl;
   public $embedurl;
   public $emailaddr;
   public $facebookid;
   public $twitterid;
   public $googleid;
 }


 class bar {
   public $dasql;
   public $dasql2;
   public $listype;
   public $month;
   public $year;
   public $sterms;
   public $taglist;
   public $peoplelist_len;
   public $peoplelist;
   public $dalist_len;
   public $dachunk;
   public $dalist;
   public $pobj;
 }


class taglist {
    public $webit_id;
    public $tags;
}



class stat {
 	
    public $tag;
    public $groupid;
    public $month;
    public $year;
    public $desc;
    public $listype;
    public $lnum;
    public $cnum;
    public $max_chunks;
    public $last_chunk = "-1";
}

class allstats {
    public $tags = array();
    public $groups = array();
    public $months = array();
    public $total_people;
    public $total_unsorted;
    public $total_sorted;
    public $sql = "";
}

