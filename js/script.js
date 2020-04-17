var video;

window.onload = function() {
	video = document.getElementById('movie');
};

function play() {
    video.play();
}

function pause() {
    video.pause();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}
