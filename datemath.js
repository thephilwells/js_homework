var mydate = new Date();
console.log("Created: " + mydate.toDateString() + " " + mydate.toTimeString());
mydate.setDate(mydate.getDate()+33); // add 33 days to the 'date' part
console.log("After adding 33 days: " + mydate.toDateString() + " " + mydate.toTimeString());
