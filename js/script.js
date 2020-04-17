var video, currentTime, duration;

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


//таймер
document.addEventListener('DOMContentLoaded',function(){
  movie.on(
    "timeupdate", 
    function(event){
      onTrackedVideoFrame(this.currentTime, this.duration);
    });
});

function onTrackedVideoFrame(currentTime, duration){
    $("#current").text(currentTime); 
    $("#duration").text(duration)
}