function snippet_date_diference(d1, d2) {
	var m1 = d1.getTime();
	var m2 = d2.getTime();
	return snippet_date_milli_diference(m1, m2);
}
function snippet_date_milli_diference(m1, m2) {
	var ms = Math.abs(m2-m1);
	days = Math.floor(ms / (24*60*60*1000));
    daysms=ms % (24*60*60*1000);
    hours = Math.floor((daysms)/(60*60*1000));
    hoursms=ms % (60*60*1000);
    minutes = Math.floor((hoursms)/(60*1000));
    minutesms=ms % (60*1000);
    sec = Math.floor((minutesms)/(1000));
    return {d:days,h:hours,m:minutes,s:sec};
}