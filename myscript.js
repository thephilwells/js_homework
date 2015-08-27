function getBrownieOpinion(){
    return confirm("Like brownies? Click 'ok'");
}

var name = prompt("What is your name?");
if (getBrownieOpinion()) {
    document.write("Here, have a brownie, " + name + "!")
} else {
    document.write("No brownies for you, then, " + name + "!")
}