function jsonParse() {
	var inString = prompt("Enter JSON object:");
	var out = "";
	myObject = JSON.parse(inString);
	for ( i in myObject ) {
		out += "Property: " + i + " = " + myObject[i] + "\n";
	}
	alert(out);
}
