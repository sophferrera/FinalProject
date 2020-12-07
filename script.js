var jumpTimer;

let videoIDs = ["QwZT7T-TXT0", "0tpjSq9uWsI", "zI2I319ilsY", "vwLiy4ti9is", "OlUdfLBiCJ4","Su6FeI7lHVg", "ardRp2x0D_E", "2ZBsRZ6QikI", "LAJArLC6v70", "1aIYkgTcHBw", "VYm-n4BEJNI", "GDreFpd5IV4", "OX-g_MZdW9c", "pOMuZjlFTLc", "WAOkXN7aXxg", "LAJArLC6v70", "Bm6MKHO0_CI","zluEUZmECBs","91SzTz9cYTQ"];
let playerObjects = [];
var launchContainerElement;
var launchButtonElement;
var ready = false;


window.addEventListener('DOMContentLoaded', (event) => {

  console.log("DOM LOADED...");

  launchContainerElement = document.getElementById("launchContainer");
  launchButtonElement = document.getElementById("launchButton");

  launchButtonElement.addEventListener('click', function() {

    launchButtonElement.style.pointerEvents = 'none';

    launchContainerElement.style.opacity = 0.0;
    console.log("CLICKED!");

    window.setTimeout(function() {
      jumpTimer = setInterval(volumeSweep, 1500)
    }, 1500);

    // 2. This code loads the IFrame Player API code asynchronously.
    // tag.src = "https://www.youtube.com/iframe_api";
    // var firstScriptTag = document.getElementsByTagName('script')[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.

    for (let i = 0; i < videoIDs.length; i++) {
      // let newPlayer;
      var newPlayerDivID = "video_" + i;
      console.log("Generating video and placing into DIV with ID of: " + newPlayerDivID);
      playerObjects.push(new YT.Player(newPlayerDivID, {
        height: '390',
        width: '640',
        videoId: videoIDs[i],
        playerVars: {
          'autoplay': 0,
          'controls': 0,
          'disablekb': 1,
          'fs': 0,
          'loop': 1,
          'modestbranding': 1,
          'rel': 0,
          'showinfo': 0,
          'mute': 0,
          'autohide': 1
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      }));
    }

    console.log(playerObjects);

  });


});

function volumeSweep() {

  if (ready == false) {
    return;
  }

  let videoIndexToUnmute = Math.floor(Math.random() * playerObjects.length);
  console.log("Index to unmute = " + videoIndexToUnmute);

  for (var i = 0; i < playerObjects.length; i++) {
    if (playerObjects[i].getPlayerState() == 1) {
      if (i == videoIndexToUnmute) {
        if (playerObjects[i].isMuted()) {
          console.log("UNMUTING #" + i);
          playerObjects[i].setPlaybackRate(Math.random()*2.0); // Playback rate randomization
          playerObjects[i].unMute(); // Mute Toggling
          // document.getElementById("video_" + i).style.visibility = "visible"; // Visibility toggling
        }
      } else {
        if (!playerObjects[i].isMuted()) {
          console.log("Muting #" + i);
          playerObjects[i].mute(); // Mute Toggling
          // document.getElementById("video_" + i).style.visibility = "hidden"; // Visibility toggling
        }
      }
    } else {
      console.log("Something is wrong with player #" + i);
    }
  }

}
