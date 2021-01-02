function openLink(url) {
  window.open(url);
}
//Downloads the Latest Version of APK or Mod
function download() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // Downloads APK if on mobile
      }else{
        // Downloads mod if on computer
      }
    alert("There is currently no public version of DF Pocket Dev.\nPlease check back later!");
    }
function randomBackground() {
  //Picks a random node background, then sets the background image
  var node = "url('backgrounds/node" + (Math.floor(Math.random() * Math.floor(4))+1) + ".png')";
  document.body.style.backgroundImage = node;
}