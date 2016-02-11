(function() {
	var frameNumber = 1;
	var totalFrames = 48;
	var frameExt = '.jpg';
	var frame = document.querySelector('.frame');
	var image = frameNumber + frameExt;
	frame.style.backgroundImage = 'url(img/' + image + ')';

	function animate() {
		if (frameNumber == 48) {
			frameNumber = 0;
		}
		frameNumber += 1
		console.log(frameNumber);
		image = (frameNumber) + frameExt;
		frame.style.backgroundImage = 'url(img/' + image + ')';
	}

	frame.addEventListener('animationiteration', animate, false);
})();
