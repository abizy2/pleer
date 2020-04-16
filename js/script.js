	var playbutton;
	window.addEventListener('load', function() {
	playbutton = document.getElementById('videopleer').play();
	videopleer = document.getElementById ('videopleer');
	playbutton.addEventListener ('click', playOfPause, false);
	
}, false);

function playOfPause() {
	if (videopleer.paused) {
		videopleer.play();
	} else {
		videopleer.pause ();
	}
}