function countListItems() {
	var olElement = document.getElementById("toDoList");
	var count = 0;
	for (var i=0;i < olElement.childNodes.length; i++) {
		if(olElement.childNodes[i].nodeType == 1) count++;
	}
	alert("The ordered list contains " + count + " items");
}
window.onload = countListItems;
