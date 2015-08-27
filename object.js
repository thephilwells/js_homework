myNewObject = new Object();
myNewObject.info = 'I am a shiny new object';
function myFunc() {
	alert(this.info);
}
myNewObject.showInfo = myFunc;
