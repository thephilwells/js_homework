function checkform() {
	document.getElementById("form1").onsubmit = function() {
		var allowSubmit = true;
		if(document.getElementById("user").value == "") {
			alert("Name field cannot be blank");
			allowSubmit = false;
		}
	if (allowSubmit) alert("Submission complete");
	return allowSubmit;
	}
}
window.onload = checkform;
