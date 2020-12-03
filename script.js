window.addEventListener('DOMContentLoaded', (event) => {

  //this is supposed to be disabling full screen mode, keyboard controls, and video player controls
  for (var h = 0; h < playerObjects.length; h++){
    playerObjects[h].disablekb();
    playerObjects[h].fs(0);
    playerObjects[h].controls(0);
  }

  setInterval(function() {

    for (var i = 0; i < playerObjects.length; i++) {
      //trying to choose a random video from array to play for 5 or 6 seconds at a time
      //probably means I need to nest the setInterval function inside itself?
      // let randomVideo = playerObjects[Math.floor(Math.random) * playerObjects.length];
      let videoLength = playerObjects[i].getDuration();
      playerObjects[i].seekTo(Math.random() * videoLength);
      playerObjects[i].setVolume(90);
      playerObjects[i].unMute();
      playerObjects[i].autoplay(1);
      playerObjects[k].play();

      //if the video is longer than 15 minutes it plays twice as fast
      if (videoLength > 900) {
        playerObjects[i].setPlaybackRate(2);
      }

    }

  }, 2000);




});
