function random(min, max) {
	return Math.random() * (max - min) + min;
}

// 随机经度
function randomLon() {
	return random(-180, 180);
}
// 随机纬度
function randomLat() {
	return random(-90, 90);
}
