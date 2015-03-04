
function snippet_scale_restrictW(w, h, r) {
	var rta = {
		w: w,
		h: h
	}
	if (w > r) {
		rta.w = r;
		rta.h = (rta.w * h) / w;
	}
	return rta;
}

function snippet_scale_restrictH(w, h, r) {
	var rta = {
		w: w,
		h: h
	};
	if (h > r) {
		rta.h = r;
		rta.w = (rta.h * w) / h;
	}
	return rta;
}

function snippet_scale_restrictAuto(w, h, rw, rh) {
	var r = null;
	if (w >= h) {
		if (w > rw) {
			r = snippet_scale_restrictW(w, h, rw);
			return snippet_scale_restrictH(r.w, r.h, rh);
		}
	} else {
		if (h > rh) {
			r = snippet_scale_restrictH(w, h, rh);
			return snippet_scale_restrictW(r.w, r.h, rw);
		}
	}
}