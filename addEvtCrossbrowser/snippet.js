function snippet_evt_off(e, evt, fn) {
	if (e.removeEventListener) {
		e.removeEventListener(evt, fn);
	} else if (e.detachEvent) {
		e.detachEvent('on' + evt, fn);
	}
}

function snippet_evt_on(elem, event, fn) {
	function listenHandler(e) {
		var ret = fn.apply(this, arguments);
		if (ret === false) {
			e.stopPropagation();
			e.preventDefault();
		}
		return (ret);
	}

	function attachHandler() {
		var ret = fn.call(elem, window.event);
		if (ret === false) {
			window.event.returnValue = false;
			window.event.cancelBubble = true;
		}
		return (ret);
	}
	if (elem.addEventListener) {
		elem.addEventListener(event, listenHandler, false);
		return listenHandler;
	} else {
		elem.attachEvent("on" + event, attachHandler);
		return attachHandler;
	}
}