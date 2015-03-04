function snippet_url_exist(url, fn) {
	var reader = new XMLHttpRequest();
	var checkFor = url;
	reader.open('get', checkFor, true);
	reader.onreadystatechange = checkReadyState;

	function checkReadyState() {
		if (reader.readyState === 4) {
			if ((reader.status == 200) || (reader.status == 0)) {
				fn(true);
			} else {
				fn(false);
				return;
			}
		}
	}
	reader.send(null);
}