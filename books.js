var booklistObject = {
	"booklist": [{"title": "Foundation", "author":"Isaac Asimov"},
		{"title":"Dune", "author":"Frank Herbert"},
		{"title":"2001 A Space Odyssey", "author":"Greg Bear"},
		{"title":"Stranger In A Strange Land", "author":"Robert A. Heinlein"}]
	}

var out = "";
var books = booklistObject.booklist;

for(var i=0; i<books.length; i++){
	var booknumber = i+1;
	out += "Book " + booknumber + " is: '" + books[i].title +"' by " + books[i].author + "\n";
}
