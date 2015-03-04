function snippet_preloadImages(a, b) {
	var o = {};
	for (var x in a) {
		(function() {
			var i = new Image(),
				y = x;
			i.onload = function() {
				o[a[y]] = i;
			};
			i.src = a[x];
		})();
	}
	var v = setInterval(function() {
		var c = 0;
		for (x in o) {
			c++;
		}
		if (c == a.length) {
			b(o);
			clearInterval(v);
		}
	}, 500);
}