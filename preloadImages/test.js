function onload() {

	snippet_preloadImages([
		'../resources/1.png', '../resources/2.jpg'
	], function(o) {
		var body = document.getElementsByTagName('body')[0];
		body.appendChild(o['2.jpg']);
	});

}