function Person(personName){
	this.name = personName;
	this.info = 'This person is called '+ this.name;
	this.showInfo = function() {
		alert(this.info);
	}
}
var adam = new Person("Adam");
var eve  = new Person("Eve");
Person.prototype.sayHello = function() {
	alert(this.name + " says hello");
}
