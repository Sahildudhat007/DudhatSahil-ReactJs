var video = document.getElementById("video");
var vbtn = document.getElementById("vbtn");

function pause() {
    if (video.paused) {
        video.play();
        vbtn.innerHTML = "Pause";
    } else {
        video.pause();
        vbtn.innerHTML = "Play";
    }
}