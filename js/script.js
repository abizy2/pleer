	var playbutton;
	window.addEventListener('load', function() {
		function playOfPause() {
	if (videopleer.paused) {
		videopleer.play();
	} else {
		videopleer.pause ();
	}
	videopleer = document.getElementById ('videopleer');
	playbutton = document.getElementById ('playbutton');
	playbutton.addEventListener ('click', playOfPause, false);
	
}, false);

}