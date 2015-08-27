function myObjectType() {
	this.info = 'I am a shiny object';
	this.showInfo = function() {
		alert(this.info);
	}
	this.setInfo = function(newInfo) {
		this.info = newInfo;
	}
}
var myNewObject1 = new myObjectType();
var myNewObject2 = new myObjectType();

