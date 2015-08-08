

var twidget = null;
var news_showing=false;
var news_spot = "news_spot";
var tws_live = false;



function toggle_twidget() { 
    if (tws_live) {
       hide_twidget();
    } else {
       show_twidget();
   }
}


function show_twidget() {
  
     if (twidget == null) {
       twidget = twitter_feed();
     }
     tws_live = true;

}


function hide_twidget() {  
 
      if (twidget != null) {
          twidget.render().stop();
          delete twidget;
          twidget = null;

          var tmpstr = "";
          tmpstr = tmpstr + "<img src='deskfm/images/random/twidget-logo.png' >";
          if (document.getElementById('news_spot')!=null) { 
             document.getElementById('news_spot').innerHTML=tmpstr;
          }
    }
    tws_live = false; 

}


function twitter_feed() { 

  return new TWTR.Widget({
  version: 2,
  id:'news_spot',
  type: 'search',
  search: 'standing desk',
  interval: 6000,
  title: '',
  subject: '',
  width: 300,
  height: 150,
  theme: {
    shell: {
      background: 'silver',
      color: 'black'
    },
    tweets: {
      background: '#ffffff',
      color: 'black',
      links: 'silver'
    }
  },
  features: {
    scrollbar: true,
    loop: true,
    live: true,
    hashtags: false,
    timestamp: true,
    avatars: true,
    toptweets: false,
    behavior: 'default'
  }
}).render().start();


}





