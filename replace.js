function replaceElement() {
	var newH2 = document.createElement("h2");
	var newH2Text = document.createTextNode("Welcome!");
	newH2.appendChild(newH2Text);
	var myDiv = document.getElementById("id1");
	var oldP = document.getElementById("para1");
	myDiv.replaceChild(newH2, oldP);
}

window.onload = function() {
	document.getElementById("btn").onclick = replaceElement;
}
