window.addEventListener('DOMContentLoaded', (event) => {

setInterval(function(){

  for (var i = 0; i < playerObjects.length; i++) {
    let videoLength = playerObjects[i].getDuration();
    playerObjects[i].seekTo(Math.random()*videoLength);
    playerObjects[i].setVolume(100);
    playerObjects[i].unMute();
    playerObjects[i].play();
  }

}, 2000);


});
