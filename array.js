function wrangleArray() {
	var sentence = "JavaScript is a really cool language";
	var newSentence = "";
	// Write it out
	document.getElementById("div1").innerHTML = "<p>" + sentence + "</p>";
	// Convert to an array
	var words = sentence.split(" ");
	// Remove "really" and "cool", and add "powerful" instead
	var message = words.splice(3, 2, "powerful");
	// Use an alert to tell us what words were removed
	alert("Removed words: " + message);
	// Convert the array to a string, and write it out
	document.getElementById("div2").innerHTML = "<p>" + words.join(" ") + "</p>";
}
