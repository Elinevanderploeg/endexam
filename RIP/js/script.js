
// The Timeline class.
var Timeline = function(){
 
  var interval;
  var post = 0;
  var intervalInMilliseconds = 3000; // dit is de snelheid van de eerste posts
 
  function init(){
 
    // Start posts interval.
    restartInterval();
 
  }
 
  function nextPost(){
 
    $('#container').animate({
      'margin-top': '-'+($(window).height() * post-1)
    }, 1000, function(){
      if(post >= 2){
        restartInterval();
      }
    });
 
    post++;
 
  }
 
  function restartInterval(){
 
    // Stop existing interval.
    clearInterval(interval);
 
    // Show nextPost every $intervalInMilliseconds.
    interval = setInterval(nextPost, intervalInMilliseconds);
 
  }
 
  init();
 
}
 
// Execute Timeline functions.
$(function(){
  Timeline();
});