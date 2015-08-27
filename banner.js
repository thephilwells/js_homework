var banners = ["banner1.png", "banner2.png", "banner3.png"];
var counter = 0;

function run() {
	setInterval(cycle, 2000);
}

function cycle() {
	counter++;
	if(counter == banners.length) counter = 0;
	document.getElementById("banner").src = "img/"+banners[counter];
}
