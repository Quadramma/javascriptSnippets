function onload() {

	//Scale restrict width
	var i1 = document.getElementById('myImg1');
	var s1 = snippet_scale_restrictW(i1.width, i1.height, 230);
	i1.width = s1.w;
	i1.height = s1.h;

	//Scale restrict height
	var i2 = document.getElementById('myImg2');
	var s2 = snippet_scale_restrictH(i2.width, i2.height, 230);
	i2.width = s2.w;
	i2.height = s2.h;

	//Scale restrict auto
	var i3 = document.getElementById('myImg3');
	console.info(i3.width);
	console.info(i3.height);
	console.info(window.innerWidth);
	console.info(window.innerHeight);
	var s3 = snippet_scale_restrictAuto(i3.width, i3.height, window.innerWidth, window.innerHeight);
	console.log(s3.w);
	console.log(s3.h);
	i3.width = s3.w;
	i3.height = s3.h;


}