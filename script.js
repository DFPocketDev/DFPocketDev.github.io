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
function changePage(page) {
  url = page + ".html";
  location.href = url;
}

function aboutLoad() {
  randomBackground();
  profile('f33f0e36-31d9-47cb-a4a6-1d30e5816232', "Lead Developer of DFPocketDev.").then(function() {
    profile('2ee60a1d-8913-4d8d-8022-72fa0738d0e1', "Helped design logo and make stylistic descisions.");
  });
}
async function profile(uuid, bio) {
  username = await getUsername(uuid);
  console.log(username);
  var profile =
  "<div class=\"profile\"><div class=\"card\"><img class=\"profile\" src=\"https://mc-heads.net/head/" + uuid + "\"><p class=\"profile\">" + username + "<p></div><p class=\"bio\">" + bio + "<p></div><hr>";
  document.body.innerHTML = document.body.innerHTML + profile;
}
function getUsername(uuid) {
  return fetch('https://mojang-api.vercel.app/v1/names?uuid=' + uuid)
  .then(response => response.json())
  .then(json => {
      return json[json.length - 1].name;
  });
}
function setBackground(node) {
  var bg = "url('backgrounds/node" + node + ".png')";
  document.body.style.backgroundImage = bg;
}