function onload() {
	console.info('start');

	var counter = 5;

	var resizeFn = snippet_evt_on(window, 'resize', function() {
		counter--;
		console.info('You will detect resize for ' + counter + ' times more.');
		if (counter <= 0) {
			snippet_evt_off(window, 'resize', resizeFn);
			console.info('event off');
		}
	});

	console.info('The snippet return the fn attached to the event. Use it for turn off the event.');


}