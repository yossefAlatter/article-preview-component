var share = document.querySelector(".share");
var shareItems = document.querySelector(".share-items");
var myTtrignal = document.querySelector(".mytrignal");
var x = 4;
var lgMedia = window.matchMedia("(min-width: 800px)");
var smMedia = window.matchMedia("(max-width: 800px)");
var tricker = document.getElementsByClassName("trick")[0];
share.onclick = () => {
  if (lgMedia.matches) {
    if (x % 2 === 0) {
      shareItems.style.display = "flex";
      myTtrignal.style.display = "block";
      shareItems.style.transform = "scaleX(1)";
    } else {
      shareItems.style.display = "none";
      myTtrignal.style.display = "none";
      shareItems.style.transform = "scaleX(0)";
    }
    x += 1;
  }
  if (smMedia.matches){
    if (x % 2 === 0) {
        shareItems.style.transform = "scaleX(1)";
      } else {
        shareItems.style.transform = "scaleX(0)";
      }
      x += 1;
}
};
function mycheck (p) {
    if (p.matches){
        shareItems.style.display = "flex";
        myTtrignal.style.display = "none";
    }else{
        shareItems.style.display = "none";
        // myTtrignal.style.display = "none";
    }
}
mycheck (smMedia) ;
smMedia.addListener(mycheck);
tricker.onclick= ()=>{
    if (smMedia.matches){
        if (x % 2 === 0) {
            shareItems.style.transform = "scaleX(1)";
          } else {
            shareItems.style.transform = "scaleX(0)";
          }
          x += 1;
    }
}