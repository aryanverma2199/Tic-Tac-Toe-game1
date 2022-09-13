
var mu,volumeslider,clickimg;

function initAudioplayer()
{ 
var mu = new Audio("bgmuzik.mp3");
mu.loop = true;
mu.play();
volumeslider = document.getElementById("volumeslider");
volumeslider.addEventListener("mousemove", setvolume);

function setvolume(){
    mu.volume = volumeslider.value / 100;
}

}


/* window.addEventListener("load", initAudioplayer);  */

