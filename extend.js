String.prototype.backwards = function(){
	var out = '';
	for(var i = this.length-1; i >= 0; i--){
		out += this.substr(i, 1);
	}
	return out;
}
